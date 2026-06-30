import NavBar from "../components/navigationBar";
import Footer from "../components/footer";
import SignIn from "../components/signIn";

export default function SignInPage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <SignIn />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}