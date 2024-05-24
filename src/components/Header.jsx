import Navbar from "./Navbar.jsx";
import Logo from "../assets/logo.png";
function Header() {
  return (
    <header className="flex justify-between">
      <div className="logo-container max-w-14">
        <img src={Logo} alt="Elden Ring" className="" />
      </div>

      <button>Open</button>
      <Navbar />
    </header>
  );
}
export default Header;
