import Footer from "@/components/ui/Shared/Footer/Footer";
import NavBar from "@/components/ui/Shared/Navbar/NavBar";

export default function RootLayout({ children }) {
  return (
    <section>
      <header>
        <NavBar/>
      </header>
      <main>{children}</main>
      <footer>

        <Footer/>
      </footer>
    </section>
  );
}
