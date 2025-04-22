import Cart from "../eCommerce/Cart";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div>
          <span className="inline-block bg-blue-500 text-white text-2xl font-semibold px-2 py-1 rounded-sm">
            Vintage logo
          </span>
        </div>

        <div>
          <Cart />
        </div>
      </div>
      
      <NavBar />
    </header>
  );
};

export default Header;
