
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";


const CartList = ({ product }) => {
    const {product_id} = product; 
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const storedProducts = JSON.parse(localStorage.getItem("product-list")) || [];
        setProducts(storedProducts);
    } , [])
    
   
    const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.product_id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("product-list", JSON.stringify(products));
    console.log(products, updatedProducts, id, product_id)
           
    }
    const { image, product_name, description, price } = product;
    return (
        <div className="bg-white p-5 mb-5 rounded-xl">
            {/* icon: cross or delete button */}
            <div className="flex justify-end">
                <button  onClick={() => handleDeleteProduct(product_id)}
                >{<RxCross1 />}</button>
            </div>
            <div className="card card-side bg-base-100 shadow-sm">

                <div className="md:flex gap-10">
                    <div>
                        <figure>
                            <img className="rounded-xl w-full"
                                src={image}
                                alt={product_name} />
                        </figure>
                    </div>
                    <div className="space-y-3">
                        <h2 className="card-title">{product_name}</h2>
                        <p className="text-sm">{description}</p>
                        <p>Price: $ {price}</p>
                       

                    </div>
                </div>
            </div>

        </div>
    );
};

CartList.propTypes = {
    product: PropTypes.object,
    products:PropTypes.array
}
export default CartList;