
import './NavBar.css'
import {  NavLink } from "react-router";
const NavBar = () => {
    return (
        <div className=" max-w-5xl mx-auto  navbar block md:flex  bg-[#9538E2]">
        <div className="navbar-start">
            <div className="flex justify-center items-center gap-2  mb-10 md:mb-0  ">
                <div>
                    <i className="fa-solid fa-arrow-right w-8 h-8 bg-house-builder-primary rounded-full -rotate-45 p-2"></i>
                </div>
                <div>
                    <h1 className="text-white font-bold text-md md:text-2xl">Gadget Heaven</h1>
                </div>
            </div>
        </div>
        <div className="navbar-center  lg:flex "  >
            <nav className=" flex gap-4 text-white text-center justify-center" id="NavId">
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