import StaffNavBar from "../components/staffNavigationBar";
import OrdersPage from "../components/ordersPage";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";

export default function OrderPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <OrdersPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
