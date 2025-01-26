
import './NavBar.css'
import {  NavLink } from "react-router";
const NavBar = () => {
    return (
        <div className=" max-w-screen-xl mx-auto px-6 lg:px-20 navbar ">
        <div className="navbar-start">
            <div className="flex justify-center items-center gap-2 ">
                <div>
                    <i className="fa-solid fa-arrow-right w-8 h-8 bg-house-builder-primary rounded-full -rotate-45 p-2"></i>
                </div>
                <div>
                    <h1 className="text-white font-bold text-2xl">Gadget Heaven</h1>
                </div>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex" >
            <nav className=" flex  gap-4 text-white" id="NavId">
                <NavLink  to ="/">Home</NavLink>
                <NavLink to = "/statistics">Statistics</NavLink>
                <NavLink to = "/dashboard">Dashboard</NavLink>
            </nav>
        </div>
        <div className="navbar-end gap-4">
            <button className="btn hidden md:block bg-house-builder-primary text-house-builder-black font-bold rounded-3xl">Book
                Consult
            </button>
        </div>
    </div>
    );
};

export default NavBar;