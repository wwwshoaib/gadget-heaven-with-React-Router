import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";



const Products = () => {
    const productsData = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...productsData].filter(product => product.category === category);
            setProducts(filteredByCategory)
        }

        else {
            setProducts(productsData.slice(0, 9))
        }

    }, [productsData, category])

    return (
        <div className="bg-slate-50 max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center py-5">Explore Cutting-Edge Gadgets</h2>
            <div className=" grid grid-cols-1 md:grid-cols-5   ">
                <div className="col-span-1">
                    {/* products menu */}
                    <div className=" text-center my-0 md:py-10 space-y-2 block  bg-white" id="CategoryId">

                        <NavLink to='/' >All products </NavLink> <br />


                        <NavLink to='/category/laptop'  >Laptop</NavLink> <br />


                        <NavLink to='/category/phone'  >Phone</NavLink> <br />


                        <NavLink to='/category/smartwatch' >Smart Watch</NavLink> <br />


                        <NavLink to='/category/accessory'>Accessories</NavLink> <br />



                        <NavLink to='/category/:'  >LED TV</NavLink>







                    </div>
                </div>
                <div className="  col-span-4 ">
                    {/* products display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-2 mb-4">

                        {
                            products.map(product => <Product product={product} key={product.product_id} ></Product>)
                        }
                    </div>
                </div>
            </div>

        </div>


    );
};

Products.propTypes = {
    category: PropTypes.array,
    categories: PropTypes.array
}

export default Products;
