

const DashBoardHeader = () => {
    return (
        <div className="max-w-full mx-auto ">
            <header className="  bg-[#9538E2]   py-5 ">

                <section className=" px-6 lg:px-20 my-10 text-center  ">
                    <div className="  flex flex-col justify-center items-center  ">
                        <div className="text-center p-4 ">
                            <h1 className="text-white text-2xl md:text-4xl font-semibold  md:w-[600px]">Dashboard</h1>
                        </div>
                        <div className="pb-4 px-4">
                            <p className="text-white font-sm  md:w-[550px]">Explore the latest gadgets that will make your experience to the next level. From small devices to the coolest Accessories, we have it all!</p>
                        </div>
                       
                    </div>
                </section>
            </header>
        </div>
    );
};

export default DashBoardHeader;