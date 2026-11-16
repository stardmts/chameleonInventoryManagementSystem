import StaffNavBar from "../components/staffNavigationBar";
import Footer from "../components/footer";
import QrScanner from "../components/qrScanner";
import SideBar from "../components/sideBar";

export default function QrScannerPage() {
  return (
    <div>
      <header>
        <StaffNavBar />
      </header>
      <div className = "flex lg:flex-row flex-col">
        <SideBar />
        <QrScanner />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
