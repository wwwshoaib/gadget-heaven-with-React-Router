

import PropTypes from "prop-types";
import Specification from "../Specification/Specification";

const WishList = ({ product }) => {
    const { image, product_name, description, price, specifications, rating } = product;
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
                        <div className="text-sm md:text-md pb-5">
                            <p className="font-semibold text-xl">Specifications: </p>
                            {
                                specifications.map((specification, index) => <Specification key={index} specification={specification} ></Specification>)
                            }

                            <p className="font-semibold text-xl pt-3 mb-3">Ratings: </p>
                            <div className="flex justify-between w-40" >
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-200" />
                                </div>
                                {/* rating */}
                                <div className="bg-slate-100 p-2 rounded-lg  ">
                                    {rating}
                                </div>
                            </div>
                        </div>
                        <button className="btn bg-green-400">Add to Cart</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

WishList.propTypes = {
    product: PropTypes.object
}
export default WishList;