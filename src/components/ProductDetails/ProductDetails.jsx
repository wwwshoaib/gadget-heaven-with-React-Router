import { useLoaderData, useParams } from "react-router";
import Specification from "../Specification/Specification";
import { CiShoppingCart } from "react-icons/ci";
import LoveImg from '../../assets/love-icon.png'
import { addToStoredProductsList, addToStoredWishList, getStoredProductsList, getStoredWishList } from "../../utility/addToDb";
import { useEffect, useState } from "react";



const ProductDetails = () => {
    const { product_id } = useParams();

    const products = useLoaderData();
    const id = parseInt(product_id);
    const selectedProduct = products.find(product => product.product_id === id);
    const { image, product_name, price, description, specifications, rating, availability } = selectedProduct;

     //Disabling button after the product added to Cart/WishList
     const [isAddedCart, setIsAddedCart] = useState(false);
     useEffect (() => {
         const singleData = products.find(product => product.product_id == id)
         const cartProducts = getStoredProductsList();
         const isExist = cartProducts.find(item => item.id == singleData.product_id)
         if(isExist) {
             setIsAddedCart(true)
         }
     }, [id, products]) 

      //Disabling button after the product added to Cart/WishList
      const [isAddedWishList, setIsAddedWishList] = useState(false);
      useEffect (() => {
          const singleData = products.find(product => product.product_id == id)
          const WishListProducts = getStoredWishList()
          const isExist = WishListProducts.find(item => item.id == singleData.product_id)
          if(isExist) {
              setIsAddedWishList(true)
          }
      }, [id, products])

    //handle add to cart
    const handleAddToCart = (id) => {
        addToStoredProductsList(id);
        setIsAddedCart(true)
    } 

    //handle add to cart
    const handleWishList = (id) => {
        addToStoredWishList(id);
        setIsAddedWishList(true)
    } 

   



    return (
        <div className=" max-w-5xl mx-auto     bg-[#9538E2]">
            {/* Product details */}
            <div className="flex flex-col justify-center items-center  text-white   ">
                <h1 className="text-xl md:text-3xl font-medium">Product Details</h1>
                {/* Products description */}
                <p className="w-8/12 text-center py-10 px-2 text-sm md:text-md">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-white py-10 px-4 md:px-0 ">
                <div className="  h-1vh  border-2">
                    <div className=" block md:flex gap-5 ">
                        <div className=" border-r-2  rounded-lg md:w-1/3 p-2">
                            <img
                                src={image}
                                className=" h-[320px] w-full  rounded-lg" />
                        </div>

                        <div className="w-2/3 p-2 px-2 md:p-5 ">
                            <p className="font-semibold text-xl md:text-2xl">{product_name}</p>
                            <p>Price: $ {price}</p> <br />
                            {/* availability */}
                            <div className=" w-28 h-10 bg-gray-100  rounded-full my-5 ">

                            {
                                   availability?
                                    <p className="text-green-500 px-3 py-2">In Stock</p>
                                    :   
                                    <p className="text-red-500 px-3 py-2">Not In Stock</p>
                                
                            }


                            </div>
                            <p className="text-sm md:text-md pb-5">{description}</p>
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
                            <div className="text-white flex justify-between w-52">
                                

                            <button disabled = {isAddedCart}
                            onClick={() => handleAddToCart(product_id)}
                            className="btn bg-fuchsia-600 rounded-full text-white  ">Add to Cart 
                                <span className="text-2xl font-semibold">< CiShoppingCart /></span>
                            </button>
                           {/* button: wishlist */}
                           <button disabled = {isAddedWishList}
                            onClick={() => handleWishList(product_id)}> 
                            <img src =  {LoveImg}alt="" 
                            className="w-12 h-12"/></button>
                           
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductDetails; 