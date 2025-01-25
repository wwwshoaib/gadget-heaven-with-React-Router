

import BannerImg from "../../assets/banner.jpg"
const BannerImage = () => {
    return (
        <div>
             {/* banner image */}
             <section className="relative -top-16 md:-top-36 flex justify-center ">
                    <div className="p-4  rounded-xl border border-white">
                        <img className="w-[200px] md:w-[600px] rounded-xl " src={BannerImg} alt="" />
                    </div>
                </section>
            
        </div>
    );
};

export default BannerImage;