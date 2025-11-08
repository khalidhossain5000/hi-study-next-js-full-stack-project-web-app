import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCollection } from "@/lib/collections";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const usersCollection = await getCollection("users");
        let user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          // hash password before saving
          const hashedPassword = await bcrypt.hash(credentials.password, 12);

          const newUser = {
            name: credentials.name,
            email: credentials.email,
            password: hashedPassword,
            role: "student",
            timeCreated: new Date(),
          };

          const result = await usersCollection.insertOne(newUser);
          user = { _id: result.insertedId, ...newUser };
        }

        // Compare input password with hashed password
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) return null;

        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const usersCollection = await getCollection("users");
        const existingUser = await usersCollection.findOne({ email: user.email });

        if (!existingUser) {
          await usersCollection.insertOne({
            email: user.email,
            name: user.name,
            role: "student",
            timeCreated: new Date(),
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user._id?.toString() || user.id;
        token.role = user.role || "student";
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
