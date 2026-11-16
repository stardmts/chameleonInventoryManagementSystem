import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import UsersPage from "../components/usersPage";
import SideBar from "../components/sideBar";

export default function UserPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <UsersPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
