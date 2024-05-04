import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Logo from "./Logo";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);



    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    

    return (
       
        <div className="navbar bg-gray-200 rounded-lg">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li className="font-semibold text-base"><NavLink to="/">Home</NavLink></li>
                     <li className="font-semibold text-base"><NavLink to='/services'>Services</NavLink></li>
                       {
                        user &&  <li>
                        <a className="font-semibold text-base">Dashboard</a>
                        <ul className="p-2">
                        <li className="font-semibold text-base"><NavLink to="/manage-service">My-Services</NavLink></li>
                        <li className="font-semibold text-base"><NavLink to="/add-service">Add-Services</NavLink></li>
                        <li className="font-semibold text-base"><NavLink to="/my-schedules">My-Schedules</NavLink></li>
                           
                        </ul>
                    </li>
                       }
                        
                    </ul>
                </div>
                <Logo></Logo>
             <span className="ml-2 font-bold">Home Care</span>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li className="font-semibold text-base"><NavLink to="/">Home</NavLink></li>
                 <li className="font-semibold text-base"><NavLink to='/services'>Services</NavLink></li>
                   {
                    user &&  <li tabIndex={0}>
                    <details>
                        <summary className="font-semibold text-base">Dashboard</summary>
                        <ul className="p-2 menu menu-sm dropdown-content z-[1]">
                        <li className="font-semibold text-base"><NavLink to="/manage-service">My-Services</NavLink></li>
                        <li className="font-semibold text-base"><NavLink to="/add-service">Add-Services</NavLink></li>
                        <li className="font-semibold text-base"><NavLink to="/my-schedules">My-Schedules</NavLink></li>
                        </ul>
                    </details>
                </li>
                   }
                   
                </ul>
            </div>
            <div className="navbar-end">



                    {


                    user?.email ? <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                 </div>
                             </label>
                             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                 <li>
                                 <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                             </li>
                                 <li>
                                    <button className="btn btn-sm  btn-ghost"
                                    onClick={handleSignOut}
                                  >Logout</button>

                             </li>
                            </ul>
                        </div>
                         :
                         <Link to='/login'>
                             <button className="btn btn-sm  btn-outline btn-success"><span className="text-black">Login</span></button>
                         </Link>
                     }
                 </div>
        </div>


    );
};

export default Navbar;