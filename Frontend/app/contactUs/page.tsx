import NavBar from "../components/navigationBar";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";
import SideBar from "../components/sideBar";

export default function ContactUsPage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className = "flex flex-row">
        <SideBar />
        <ContactUs />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}