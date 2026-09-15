import StaffNavBar from "../components/staffNavigationBar";
import OrdersPage from "../components/ordersPage";
import Footer from "../components/footer";

export default function OrderPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div>
        <OrdersPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
