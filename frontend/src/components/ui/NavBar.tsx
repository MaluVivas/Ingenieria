import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";


interface NavHeaderProps {
  logo: string;
  variant?: "default" | "auth";
}
export default function NavHeader(props: NavHeaderProps) {
  //valor inicial del nav
  const variant = props.variant ?? "default";

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-(--primary-color)">
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-3 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">{props.logo}</h1>
        </div>

        {/* Navigation Links */}
  {/* Navigation Links - solo en variant default */}
        {variant !== "auth" && (
          <div className="flex w-full justify-center">
            <ul className="hidden items-center gap-5 md:flex">
              <li>
                <Link to="/" className="font-bold text-(--dark-color) hover:text-(--orange-color) transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/care" className="font-bold text-(--dark-color) hover:text-(--orange-color) transition-colors">
                  Care
                </Link>
              </li>
              <li>
                <Link to="/places" className="font-bold text-(--dark-color) hover:text-(--orange-color) transition-colors">
                  Places
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-bold text-(--dark-color) hover:text-(--orange-color) transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
 
        {/* Spacer cuando es variant auth para mantener el grid */}
        {variant === "auth" && <div />}

        {/* Right side */}
        <div className="flex items-center justify-end gap-4">
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:block font-medium text-(--dark-color)">
                {user?.name}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="text-sm font-semibold text-(--bright-orange) hover:underline"
              >
                Log out
              </button>
              <button
                type="button"
                aria-label="Perfil de usuario"
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full hover:cursor-pointer"
              >
                <img
                  src="https://res.cloudinary.com/dnxlfdsh5/image/upload/v1781315263/DefaultProfile_sg1tl3.jpg"
                  alt="Foto de perfil"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-(--dark-color) hover:text-(--orange-color) transition-colors"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="bg-(--bright-orange) text-white px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}