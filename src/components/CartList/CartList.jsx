
import PropTypes from "prop-types";

const CartList = ({ product }) => {
    const { image, product_name, description, price } = product;
    return (
        <div className="bg-white p-5 mb-5 rounded-xl">
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
                        <button className="btn bg-green-400">Delete</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

CartList.propTypes = {
    product: PropTypes.object
}
export default CartList;