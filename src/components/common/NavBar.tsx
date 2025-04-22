import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="my-8 bg-blue-500 p-4 text-white rounded-sm">
      <div className="flex justify-between">
        <div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-8">
            <li>
              <Link to="/login" className="hover:underline">
                LogIn
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="hover:underline">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
