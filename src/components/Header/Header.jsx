import NavBar from "../NavBar/NavBar";
const Header = () => {
    return (
        <div>
            <header className="  bg-[#9538E2] mx-5 rounded-lg h-[580px] md:h-[600px] ">
                <NavBar></NavBar>
                <section className="max-w-screen-xl mx-auto px-6 lg:px-20 my-10 text-center  ">
                    <div className="  flex flex-col justify-center items-center  ">
                        <div className="text-center p-4 ">
                            <h1 className="text-white text-2xl md:text-4xl font-semibold  md:w-[600px]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        </div>
                        <div className="pb-4 px-4">
                            <p className="text-white font-sm  md:w-[550px]">Explore the latest gadgets that will make your experience to the next level. From small devices to the coolest Accessories, we have it all!</p>
                        </div>
                        <button className="btn py-2 px-6 my-5 rounded-3xl text-violet-800 hover:bg-green-400">Shop Now</button>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;