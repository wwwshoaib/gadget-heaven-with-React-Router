

import PropTypes from "prop-types";
const Product = ({product}) => {
    const {product_name, image, price} = product;
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-[250px] h-[150px] p-3 rounded-lg"
            src= {image} />
        </figure>
        <div className="card-body">
          <h2 className="md:text-md font-bold">{product_name}</h2>
          <p>Price: $ {price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline hover:bg-green-300">View Details</button>
          </div>
        </div>
      </div>
    );
};
Product.propTypes = {
    product:PropTypes.object
}
export default Product;