import Footer from "@/components/Shared/Footer/Footer";
import NavBar from "@/components/Shared/Navbar/NavBar";


export default function RootLayout({ children }) {
  return (
    <section>
      <header className="sticky top-0 z-50">
        <NavBar/>
      </header>
      <main>{children}</main>
      <footer>

        <Footer/>
      </footer>
    </section>
  );
}
