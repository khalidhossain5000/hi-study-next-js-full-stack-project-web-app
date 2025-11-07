import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/Navbar/NavBar";


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
