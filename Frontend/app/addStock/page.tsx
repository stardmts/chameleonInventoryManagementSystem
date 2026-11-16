import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import AddStock from "../components/addStock";

export default function addStock() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <AddStock />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
