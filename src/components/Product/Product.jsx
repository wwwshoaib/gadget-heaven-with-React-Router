

import PropTypes from "prop-types";
import { Link } from "react-router";
const Product = ({product}) => {
    const {product_name, image, price, product_id} = product;
    return (
       <Link to ={`/products/${product_id}`}>
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-[250px] h-[150px] p-3 rounded-lg"
            src= {image} />
        </figure>
        <div className="card-body flex ">
          <h2 className="md:text-md font-bold ">{product_name}</h2>
          <p className="flex-grow" >Price: $ {price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline hover:bg-green-300">View Details</button>
          </div>
        </div>
      </div>
       </Link>
    );
};
Product.propTypes = {
    product:PropTypes.object
}
export default Product;