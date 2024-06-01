import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const {user,logOut} = useAuth()
  const location = useLocation()
  const currentLocation = location.pathname
  const handleLogout = () => {
    logOut()
    .then(res => {
      toast.success('Log out Successful')
    })
  }
  return (
    <header className=" container mx-auto bg-[linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4))]">
      <nav className="flex container fixed z-10 mx-auto justify-between py-5 ">
        <h1 className="text-4xl font-semibold">Asset<span className="text-violet-500">Flow</span></h1>
        <div className={`${currentLocation !== '/' ? 'text-black flex items-center gap-x-10 text-lg font-medium' : 'text-white flex gap-x-10 text-lg font-medium items-center'} `}>
          <ul className="flex gap-x-10 ">
            <NavLink className={({isActive})=> isActive ? 'text-violet-500': 'hover:text-violet-500 transition-all duration-300'} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? 'text-violet-500': 'hover:text-violet-500 transition-all duration-300'} to='/joinasemployee'>Join As Employee</NavLink>
            <NavLink className={({isActive})=> isActive ? 'text-violet-500': 'hover:text-violet-500 transition-all duration-300'} to='/joinashr'>Join As HR Manager</NavLink>
          </ul>
          {
            user && user ? <button onClick={handleLogout} className="hover:text-violet-500" >Log out</button> : <NavLink className={({isActive})=> isActive ? 'text-violet-500': 'hover:text-violet-500'} to='/login'>Login</NavLink>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
