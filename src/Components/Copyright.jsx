import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Copyright() {
    return (
        <div id="copyright" className='bg-black py-6 px-6 md:px-16 flex items-center justify-between flex-wrap gap-5'>
            <p className="text-white text-sm text-center">Copyright ©2024 All rights reserved | This template is made by<span className="text-mainRed pl-2">Macro</span></p>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-8 w-8 bg-gray-800 text-white hover:bg-mainRed hover:text-black transition duration-300 cursor-pointer">
                    <FaFacebookF />
                </div>
                <div className="flex items-center justify-center h-8 w-8 bg-gray-800 text-white hover:bg-mainRed hover:text-black transition duration-300 cursor-pointer">
                    <FaTwitter />
                </div>
                <div className="flex items-center justify-center h-8 w-8 bg-gray-800 text-white hover:bg-mainRed hover:text-black transition duration-300 cursor-pointer">
                    <FaInstagram />
                </div>
                <div className="flex items-center justify-center h-8 w-8 bg-gray-800 text-white hover:bg-mainRed hover:text-black transition duration-300 cursor-pointer">
                    <FaYoutube />
                </div>
            </div>
        </div>
    )
}

export default Copyright
