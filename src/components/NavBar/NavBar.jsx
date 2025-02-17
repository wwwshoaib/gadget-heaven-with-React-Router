import { CiShoppingCart } from "react-icons/ci";
import LoveImg from '../../assets/love-icon.png'
import './NavBar.css'
import { NavLink} from "react-router";

import PropTypes from "prop-types";
const NavBar = () => {

    
  


    return (
        <div className=" max-w-5xl mx-auto  navbar block md:flex  bg-[#9538E2]  rounded-t-2xl px-10 items-center">
            <div className="navbar-start">
                {/* dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className="text-md">Home</NavLink>
                        <NavLink to="/allproducts" className="text-md">All Products</NavLink>
                        <NavLink to="/statistics" className="text-md">Statistics</NavLink>
                        <NavLink to="/dashboard" className="text-md">Dashboard</NavLink>
                    </ul>
                </div>
                <div className="flex justify-center items-center   mb-10 md:mb-0  ">

                    <div>
                        <h1 className="text-white font-bold text-xl">Gadget Heaven</h1>
                    </div>
                </div>
            </div>
            <div className="navbar-center  hidden lg:flex  "  >
                <nav className=" flex gap-4 text-white text-center justify-center " id="NavId">
                    <NavLink to="/" className="text-md">Home</NavLink>
                    <NavLink to="/allproducts" className="text-md">All Products</NavLink>
                    <NavLink to="/statistics" className="text-md">Statistics</NavLink>
                    <NavLink to="/dashboard" className="text-md">Dashboard</NavLink>
                </nav>
            </div>
            <div className="navbar-end gap-1">

                <button className="w-8 h-8  bg-white rounded-full text-black text-2xl p-1" >   < CiShoppingCart />

                </button>
             
                {/* button: wishlist */}
                <button> <img src={LoveImg} alt=""
                    className="w-8 h-8 bg-white rounded-full" /></button>
            </div>
        </div>
    );
};
NavBar.propTypes = {
    allProducts: PropTypes.array
}
export default NavBar;


<div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
    <div className="navbar-end">
        <a className="btn">Button</a>
    </div>
    
</div>