import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import UsersPage from "../components/usersPage";

export default function OrderPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div>
        <UsersPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
