
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";




const CartList = ({ product, handleCartRemove }) => {
    const {product_id} = product; 
  
    
   
    const { image, product_name, description, price } = product;
    return (
        <div className="bg-white p-5 mb-5 rounded-xl">
            {/* icon: cross or delete button */}
            <div className="flex justify-end">
                <button  onClick={() => handleCartRemove(product_id)}
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
    products:PropTypes.array,
    handleCartRemove:PropTypes.func
}
export default CartList;