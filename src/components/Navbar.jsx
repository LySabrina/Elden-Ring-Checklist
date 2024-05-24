function Navbar() {
  const navItems = ["Armors", "Shields", "Weapons"];
  return (
    <nav id="nav" className="bg-white text-black ">
      <ul className="nav-list flex align-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <button>{item}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
