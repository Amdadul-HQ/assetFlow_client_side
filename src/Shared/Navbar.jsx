import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const currentLocation = location.pathname
  return (
    <header className=" container mx-auto bg-[linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4))]">
      <nav className="flex container fixed z-10 mx-auto justify-between py-5 ">
        <h1 className="text-4xl font-semibold">Asset<span className="text-violet-500">Flow</span></h1>
        <div className={`${currentLocation !== '/' ? 'text-black flex items-center gap-x-10 text-lg font-medium' : 'text-white flex gap-x-10 text-lg font-medium'} `}>
          <ul className="flex gap-x-10 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/joinasemployee'>Join As Employee</NavLink>
            <NavLink to='/joinashr'>Join As HR Manager</NavLink>
          </ul>
          <NavLink>Login</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
