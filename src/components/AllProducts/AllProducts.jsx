import Header from "../Header/Header";
import BannerImage from "../BannerImage/BannerImage";
import ProductsAll from "../ProductsAll/ProductsAll";


const AllProducts = () => {
    return (
       <div>
         <Header></Header>
        <BannerImage></BannerImage>
        <ProductsAll></ProductsAll>
        {/* Dynamic nested components */}
       </div>
     
    );
};

export default AllProducts;