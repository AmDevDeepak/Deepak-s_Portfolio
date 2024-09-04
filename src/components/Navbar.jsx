import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-40 h-10 rounded-lg bg-white items-center flex justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">DEEPAK 💛</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Know Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/resume"
          download="../assets/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Get Resume
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;
