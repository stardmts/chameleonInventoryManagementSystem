import StaffNavBar from "../components/staffNavigationBar";
import Admin from "../components/admin";
import Footer from "../components/footer";

export default function AdminPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div>
        <Admin />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
