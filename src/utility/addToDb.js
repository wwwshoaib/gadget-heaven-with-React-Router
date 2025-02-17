import toast from 'react-hot-toast';


//get the data
const getStoredProductsList = () => {
    const storedListStr = localStorage.getItem('product-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else {
        return [];
    }
} 


//store the data to Cart

const addToStoredProductsList = (id) => {
    const storedList = getStoredProductsList();
    if(storedList.includes(id)) {
        toast.error('Already added to Cart!');
    } 

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('product-list', storedListStr)
        //toast notification
        toast.success('Successfully added to Cart!');
    }
} 




//get data from wishlist

//get the data
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else {
        return [];
    }
} 


//store the data

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)) {
        toast.error('Already added to WishList!');
    } 

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
         //toast notification
         //toast notification
         toast.success('Successfully added to WishList!');
    }
}  

//remove the product from cart list

const removeCartProduct = id => {
    const cartProducts = getStoredProductsList();
    const remaining = cartProducts.filter(product => product.product_id !=id);
    localStorage.setItem('product-list', JSON.stringify(remaining));
    toast.success('Successfully removed the product from Cart!');
} 


//remove the product from cart list

const removeWishProduct = id => {
    const wishProducts = getStoredWishList();
    const remaining = wishProducts.filter(product => product.product_id !=id);
    localStorage.setItem('wish-list', JSON.stringify(remaining));
    toast.success('Successfully removed the product from WishList!');
}

export { getStoredProductsList, addToStoredProductsList, addToStoredWishList ,  getStoredWishList, removeCartProduct, removeWishProduct }