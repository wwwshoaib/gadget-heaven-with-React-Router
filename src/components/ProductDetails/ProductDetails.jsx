import { useLoaderData, useParams } from "react-router";
import { useEffect, useState } from "react";
import Specification from "../Specification/Specification";
import { CiShoppingCart } from "react-icons/ci";
import LoveImg from '../../assets/love-icon.png';
import { addToStoredProductsList, addToStoredWishList, getStoredProductsList, getStoredWishList } from "../../utility/addToDb";

const ProductDetails = () => {
    const { product_id } = useParams();
    const productsData = useLoaderData();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddedStored, setIsAddedStored] = useState(false);
    const [isAddedWishList, setIsAddedWishList] = useState(false);

    // Set selected product on component mount
    useEffect(() => {
        const product = productsData.find(p => p.product_id == product_id);
        setSelectedProduct(product);

        if (product) {
            // Check if product is in the cart
            const addedProductsToCart = getStoredProductsList();
            setIsAddedStored(addedProductsToCart.some(p => p.product_id == product.product_id));

            // Check if product is in the wishlist
            const addedProductsToWishList = getStoredWishList();
            setIsAddedWishList(addedProductsToWishList.some(p => p.product_id == product.product_id));
        }
    }, [product_id, productsData]);

    // Add to Cart Handler
    const handleAddToCart = (id) => {
        addToStoredProductsList(id);
        setIsAddedStored(true);
    };

    // Add to Wishlist Handler
    const handleWishList = (id) => {
        addToStoredWishList(id);
        setIsAddedWishList(true);
    };

    // Prevent rendering before data is available
    if (!selectedProduct) {
        return <p>Loading product details...</p>;
    }

    const { image, product_name, price, description, specifications, rating, availability } = selectedProduct;

    return (
        <div className="max-w-5xl mx-auto bg-[#9538E2]">
            <div className="flex flex-col justify-center items-center text-white">
                <h1 className="text-xl md:text-3xl font-medium">Product Details</h1>
                <p className="w-8/12 text-center py-10 px-2 text-sm md:text-md">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className="bg-white py-10 px-4 md:px-0">
                <div className="border-2">
                    <div className="block md:flex gap-5">
                        <div className="border-r-2 rounded-lg md:w-1/3 p-2">
                            <img src={image} className="h-[320px] w-full rounded-lg" alt={product_name} />
                        </div>

                        <div className="w-2/3 p-2 px-2 md:p-5">
                            <p className="font-semibold text-xl md:text-2xl">{product_name}</p>
                            <p>Price: $ {price}</p>
                            <div className="w-28 h-10 bg-gray-100 rounded-full my-5">
                                {availability ? (
                                    <p className="text-green-500 px-3 py-2">In Stock</p>
                                ) : (
                                    <p className="text-red-500 px-3 py-2">Not In Stock</p>
                                )}
                            </div>

                            <p className="text-sm md:text-md pb-5">{description}</p>

                            <div className="text-sm md:text-md pb-5">
                                <p className="font-semibold text-xl">Specifications:</p>
                                {specifications.map((spec, index) => (
                                    <Specification key={index} specification={spec} />
                                ))}

                                <p className="font-semibold text-xl pt-3 mb-3">Ratings:</p>
                                <div className="flex justify-between w-40">
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <input
                                                key={i}
                                                type="radio"
                                                name="rating-4"
                                                className={`mask mask-star-2 ${
                                                    i < rating ? "bg-yellow-500" : "bg-yellow-200"
                                                }`}
                                                disabled
                                            />
                                        ))}
                                    </div>
                                    <div className="bg-slate-100 p-2 rounded-lg">{rating}</div>
                                </div>
                            </div>

                            <div className="text-white flex justify-between w-52">
                                <button
                                    disabled={isAddedStored}
                                    onClick={() => handleAddToCart(product_id)}
                                    className="btn bg-fuchsia-600 rounded-full text-white"
                                >
                                    Add to Cart <CiShoppingCart className="text-2xl font-semibold" />
                                </button>

                                <button disabled={isAddedWishList} onClick={() => handleWishList(product_id)}>
                                    <img src={LoveImg} alt="Wishlist" className="w-12 h-12" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
