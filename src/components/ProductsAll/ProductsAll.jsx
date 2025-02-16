import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProductsAll = () => {
    

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('/public/productsData.json')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="bg-slate-50 max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center py-5">Explore Cutting-Edge Gadgets</h2>
            <div className=" grid grid-cols-1 md:grid-cols-5   ">
                <div className="col-span-1">
                    {/* products menu:NavLink */}
                    <div className=" text-center my-0 md:py-10 block  bg-white" >
                        <nav className="space-y-2" id="NavId">
                            <div> <NavLink to='/category/laptop'  >Laptop</NavLink> <br />  </div>
                            <div>     <NavLink to='/category/phone'  >Phone</NavLink> <br /></div>
                            <div>   <NavLink to='/category/smartwatch' >Smart Watch</NavLink> <br /> </div>
                            <div>    <NavLink to='/category/accessory'>Accessories</NavLink> <br /> </div>
                            <div>     <NavLink to='/category/:'  >LED TV</NavLink> </div>
                        </nav>
                    </div>
                </div>
                <div className="  col-span-4 ">
                    {/* products display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2 mb-4">

                        {
                            products.map(product => <Product product={product} key={product.product_id} ></Product>)
                        }
                    </div>
                    {/* Button to show all product */}

                </div>
            </div>

        </div>


    );
};

ProductsAll.propTypes = {
    category: PropTypes.array,
    categories: PropTypes.array
}

export default ProductsAll;
