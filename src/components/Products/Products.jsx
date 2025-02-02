import { useEffect, useState } from "react";

import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="bg-slate-50 max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold text-center py-5">Explore Cutting-Edge Gadgets</h2>
            <div className=" grid grid-cols-1 md:grid-cols-5   ">
                <div className="col-span-1">
                    {/* products menu */}
                    <div className=" text-center my-0 md:py-10 space-y-3 block  bg-white">
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">All Products</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">Laptops</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">Phones</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">Accessories</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">Smart Watches</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">MacBook</button> <br />
                        <button className="bg-slate-100 py-2 w-full md:w-36 rounded-2xl  hover:bg-green-300">iphone</button> <br />
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

export default Products;
