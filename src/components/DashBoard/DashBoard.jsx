
import { useLoaderData } from "react-router";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { getStoredProductsList, getStoredWishList } from "../../utility/addToDb";
import CartList from "../CartList/CartList";
import WishList from "../WishList/WishList";




const DashBoard = () => {
    const allProducts = useLoaderData();
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);


    useEffect(() => {
        const storedCartList = getStoredProductsList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const cartProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
        setCartList(cartProductList);

    }, [])

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishProductList = allProducts.filter(product => storedWishListInt.includes(product.product_id));
        setWishList(wishProductList)
    }, [])

    // sort stored products by price 
    const handleToSortStoredProducts = sortBy => {
        const storedCartList = getStoredProductsList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const cartProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));
        if (sortBy == 'price') {
            const sortedProducts = [...cartProductList].sort((a, b) => b.price - a.price);
            setCartList(sortedProducts);
        }
    } 


     // sort WishList products by price 
     const handleToSortWishListProducts = sortBy => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishListProducts = allProducts.filter(product => storedWishListInt.includes(product.product_id));
        if (sortBy == 'price') {
            const sortedProducts = [...wishListProducts].sort((a, b) => b.price - a.price);
            setWishList(sortedProducts);
        }
    } 



    return (
        <div className="max-w-5xl mx-auto">
            <DashBoardHeader> </DashBoardHeader>


            {/* Tab*/}
            <div className=''>
                <Tabs>

                    <div className='flex justify-center  bg-[#9538E2] pb-5  '>
                        <TabList>
                            <Tab>Cart</Tab>
                            <Tab>   WishList</Tab>
                        </TabList>

                    </div>

                    <div className='bg-red-50 p-10'>
                        <TabPanel>
                            <h2 className='text-xl text-text font-medium py-3  '>Cart</h2>
                            {/* Sort products by price */}
                            <div className="md:flex justify-between p-5 md:p-12">
                                {/* sort price */}
                                <div>
                                    <h1 className="font-semibold text-xl">Sort Product by price in descending order:</h1>
                                </div>
                                {/*button to sort by price */}
                                <div>
                                    <button onClick={() => handleToSortStoredProducts('price')} className="btn btn-warning">Sort by Price</button>

                                </div>
                            </div>
                            {
                                cartList.map(product => <CartList key={product.product_id} product={product} ></CartList>)
                            }
                        </TabPanel>
                        <TabPanel>
                            <h2 className='text-xl text-text font-medium '>Wish List</h2>
                            {/* Sort products by price */}
                            <div className="md:flex justify-between p-5 md:p-12">
                                {/* sort price */}
                                <div>
                                    <h1 className="font-semibold text-xl">Sort Product by price in descending order:</h1>
                                </div>
                                {/*button to sort by price */}
                                <div>
                                    <button onClick={() => handleToSortWishListProducts('price')} className="btn btn-warning">Sort by Price</button>

                                </div>
                            </div>
                            {
                                wishList.map(product => <WishList key={product.product_id} product={product} ></WishList>)
                            }
                        </TabPanel>
                    </div>

                </Tabs>

            </div>


        </div>
    );
};

export default DashBoard;