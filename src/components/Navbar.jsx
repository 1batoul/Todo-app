import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const nextTheme =
    theme === "dark" ? "🌞 Ljus" : theme === "light" ? "🌸 Rosa" : "🌙 Mörk";

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Todos
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            Om
          </Link>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Byt tema"
      >
        {nextTheme}
      </button>
    </nav>
  );
};

export default Navbar;
