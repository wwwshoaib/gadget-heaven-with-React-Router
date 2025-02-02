import { useEffect, useState } from "react";

import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/public/productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="bg-slate-50">
            <h2 className="text-xl md:text-2xl font-semibold text-center py-5">Explore Cutting-Edge Gadgets</h2>
            <div className=" grid grid-cols-1 md:grid-cols-5   ">
                <div className="col-span-1">
                    {/* products menu */}

                    <h3 className="text-center">dashboard</h3>
                    <h3 className="text-center">dashboard 1</h3>
                    <h3 className="text-center">dashboard 2</h3>
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
