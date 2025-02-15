import { CiShoppingCart } from "react-icons/ci";
import LoveImg from '../../assets/love-icon.png'
import './NavBar.css'
import { NavLink } from "react-router";
import { getStoredProductsList } from "../../utility/addToDb";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const NavBar = () => {
    const [product, setProduct] = useState(null);

  
    useEffect (() => {
        const storedCartList = getStoredProductsList();
        const productNumbers = storedCartList.length;
        const prd = product + productNumbers;

        setProduct(prd)
       
    
    },[])
    return (
        <div className=" max-w-5xl mx-auto  navbar block md:flex  bg-[#9538E2] rounded-t-2xl px-10">
            <div className="navbar-start">
                <div className="flex justify-center items-center gap-2  mb-10 md:mb-0  ">
                    <div>
                        <i className="fa-solid fa-arrow-right w-8 h-8 bg-house-builder-primary rounded-full -rotate-45 p-2"></i>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-lg">Gadget Heaven</h1>
                    </div>
                </div>
            </div>
            <div className="navbar-center  "  >
                <nav className=" flex gap-4 text-white text-center justify-center " id="NavId">
                    <NavLink to="/" className="text-md">Home</NavLink>
                    <NavLink to="/statistics" className="text-md">Statistics</NavLink>
                    <NavLink to="/dashboard" className="text-md">Dashboard</NavLink>
                </nav>
            </div>
            <div className="navbar-end gap-1">
          
                <button className="w-8 h-8  bg-white rounded-full text-black text-2xl p-1" >   < CiShoppingCart />
            
                </button>
                {product}
                {/* button: wishlist */}
                <button> <img src={LoveImg} alt=""
                    className="w-8 h-8 bg-white rounded-full" /></button>
            </div>
        </div>
    );
};
NavBar.propTypes = {
    allProducts:PropTypes.array
}
export default NavBar;