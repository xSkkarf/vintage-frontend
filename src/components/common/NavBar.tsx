import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="my-8 bg-blue-500 p-4 text-white rounded-sm">
      <div className="flex justify-between">
        <div>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`hover:underline ${isActive("/") ? "font-bold" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:underline ${isActive("/products") ? "font-bold" : ""}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className={`hover:underline ${isActive("/categories") ? "font-bold" : ""}`}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`hover:underline ${isActive("/about-us") ? "font-bold" : ""}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/login"
                className={`hover:underline ${isActive("/login") ? "font-bold" : ""}`}
              >
                LogIn
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className={`hover:underline ${isActive("/sign-up") ? "font-bold" : ""}`}
              >
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
