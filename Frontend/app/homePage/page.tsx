import StaffNavBar from "../components/staffNavigationBar";
import LandingPage from "../components/landingPage";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div>
        <LandingPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
