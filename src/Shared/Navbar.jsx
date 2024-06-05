import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useHrManager from "../Hooks/useHrManager";
import useEmployee from "../Hooks/useEmployee";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const handleLogout = () => {
    logOut().then((res) => {
      toast.success("Log out Successful");
      navigate('/')
    });
  };
  const {data:userdetails} =useQuery({
    queryKey:['userdetails',user?.email],
    queryFn:async()=>{
        const {data} = await axiosSecure.get(`/userdetails/${user?.email}`)
        return data
    }
})
  const [isHr] = useHrManager()
  const [isEmployee] = useEmployee()
  return (
    <header className="mx-auto">
      <nav className="flex px-20 w-full fixed bg-black z-10 mx-auto justify-between py-3 ">
        {userdetails ? <div className="flex items-center gap-x-4"><div><img className="w-11 h-11" src={userdetails?.companyLogoUrl}></img></div><h1 className="text-2xl text-violet-500 font-semibold">{userdetails?.companyName}</h1></div> : <h1 className="text-4xl font-semibold">
          Asset<span className="text-violet-500">Flow</span>
        </h1>}
        <div
          className="text-white flex items-center gap-x-10 text-lg font-medium"
        >
          <ul className="flex gap-x-10 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
            {
              user && isHr === true ? <>
              <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/assetlist"
            >
              Asset List
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/addasset"
            >
              Add An Asset
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/allrequest"
            >
              All Request
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myemployee"
            >
              My Employee list
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/addemployee"
            >
              Add An Employee
            </NavLink></> : isEmployee ? <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myasset"
            >
              My Asset
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myteam"
            >
              My Team
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/requestasset"
            >
              Request for an Asset
            </NavLink>
            </> : <><NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/joinasemployee"
            >
              Join As Employee
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/joinashr"
            >
              Join As HR Manager
            </NavLink></>
            }
            
          </ul>
          {user && user ? (
            <></>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-violet-500" : "hover:text-violet-500"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
          {
            user && <div className="dropdown dropdown-end text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" referrerPolicy="no-referrer" src={user?.photoURL}/>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li onClick={handleLogout}><a>Logout</a></li>
            </ul>
          </div>
          }

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
