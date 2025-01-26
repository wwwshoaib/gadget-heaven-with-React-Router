


const Footer = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <h4 className="text-center text-3xl font-semibold">Gadget Heaven</h4>
            <p className="text-center my-5">Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer bg-white text-gray-800 px-10 md:px-40 py-16">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;