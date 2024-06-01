import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-400 container mx-auto">
      <nav className="flex container fixed z-10 mx-auto justify-between py-5 ">
        <h1 className="text-4xl font-semibold">Asset<span className="text-violet-500">Flow</span></h1>
        <div className="flex items-center text-white gap-x-10 text-lg font-medium">
          <ul className="flex gap-x-10 ">
            <NavLink>Home</NavLink>
            <NavLink>Join As Employee</NavLink>
            <NavLink>Join As HR Manager</NavLink>
          </ul>
          <NavLink>Login</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
