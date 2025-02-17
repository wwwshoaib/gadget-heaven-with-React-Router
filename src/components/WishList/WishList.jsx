

import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";


const WishList = ({ product, handleWishRemove  }) => {
    const { image, product_name, description, price,  rating, product_id } = product;
    return (
        <div className="bg-white p-5 mb-5 rounded-xl">
               {/* icon: cross or delete button */}
                        <div className="flex justify-end">
                            <button
                            onClick={()=> handleWishRemove(product_id) }
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
                        <div className="text-sm md:text-md pb-5">
                           

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
                       

                    </div>
                </div>
            </div>

        </div>
    );
};

WishList.propTypes = {
    product: PropTypes.object,
    handleWishRemove: PropTypes.func,
}
export default WishList;