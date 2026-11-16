import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import UserSettings from "../components/userSettings";

export default function SettingsPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <UserSettings />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
