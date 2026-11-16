import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import StockPage from "../components/stockPage";

export default function HomePage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <StockPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
