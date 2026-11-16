import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import AddUser from "../components/addUser";

export default function addUser() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <AddUser />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
