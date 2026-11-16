import StaffNavBar from "../components/staffNavigationBar";
import TransactionsPage from "../components/transactionPage";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";

export default function TransactionPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <TransactionsPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
