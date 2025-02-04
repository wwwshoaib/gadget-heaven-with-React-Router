import { toast } from "react-toastify";

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


//store the data

const addToStoredProductsList = (id) => {
    const storedList = getStoredProductsList();
    if(storedList.includes(id)) {
        toast.warning("Already added to Cart !", {
            position: "top-center",
          });
    } 

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('product-list', storedListStr)
        //toast notification
        toast.success("Successfully added to Cart !", {
            position: "top-center",
          });
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
        toast.warning("Already added to WishList !", {
            position: "top-center",
          });
    } 

    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
         //toast notification
         toast.success("Successfully added to WishList !", {
            position: "top-center",
          });
    }
} 

export { getStoredProductsList, addToStoredProductsList, addToStoredWishList ,  getStoredWishList }