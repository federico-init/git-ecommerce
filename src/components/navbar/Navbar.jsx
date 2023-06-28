// import css
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__links">
        <a href="#">About Us</a>
        <a href="#">Collection</a>
        <a href="#">Contacts</a>
      </div>
      <div className="Navbar__search-cart">
        <p>Search</p>
        <p>Cart</p>
      </div>
    </nav>
  );
};

export default Navbar;
