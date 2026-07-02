import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import AddStockPage from "../components/addStockPage";

export default function StaffLandingPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div>
        <AddStockPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
