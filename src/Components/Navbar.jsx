import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuLinks } from "../data";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Close the menu when the location changes
        setIsOpen(false);
    }, [location]);

    return (
        <div>
            <nav className="bg-neutral-950/80 text-white flex items-center justify-between px-6 md:px-12 lg:px-16 py-3 w-full fixed top-0 z-40">
                <h2 className="text-2xl font-bold">Marco</h2>
                <div className="hidden md:flex items-center space-x-6">
                    {MenuLinks.map((item, index) => (
                        <Link to={item.url} className="uppercase p-2 cursor-pointer hover:text-mainRed" key={index}>{item.title}</Link>
                    ))}
                </div>
                <RiMenu3Fill onClick={toggleMenu} className="text-2xl sm:text-3xl block md:hidden cursor-pointer" />
            </nav>

            {/* mobile-menu */}
            <div className={`transition-transform duration-300 z-50 fixed top-0 left-0 w-full h-full bg-neutral-950/70 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <MdClose onClick={toggleMenu} className="absolute top-3 right-6 bg-black h-8 w-8  text-white text-2xl cursor-pointer" />
            </div>
            <div className={`transition-transform duration-300 z-50 fixed top-0 left-0 w-64 h-full bg-neutral-950/90 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center text-white h-full">
                    {MenuLinks.map((item, index) => (
                        <Link to={item.url} className="uppercase p-2 cursor-pointer hover:text-mainRed" key={index}>{item.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
