import { TiHomeOutline } from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import Button from "./Button"

function ContactSection() {
    return (
        <div className="flex items-start justify-between flex-col md:flex-row px-4 sm:px-20 md:px-12 lg:px-16 py-12 pb-16  gap-8">

            {/* left section */}

            <div className="space-y-4 w-full max-w-[300px]">
                <div className="flex items-center gap-6">
                    <TiHomeOutline className="text-mainRed text-4xl " />
                    <div>
                        <h2 className="text-xl text-dimWhite">Binghamton, New York</h2>
                        <p className="text-dimWhite">4343 Hinkle Deegan Lake Road</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <FiPhone className="text-mainRed text-4xl " />
                    <div>
                        <h2 className="text-xl text-dimWhite">Binghamton, New York</h2>
                        <p className="text-dimWhite">4343 Hinkle Deegan Lake Road</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <FaRegEnvelope className="text-mainRed text-4xl " />
                    <div>
                        <h2 className="text-xl text-dimWhite">Binghamton, New York</h2>
                        <p className="text-dimWhite">4343 Hinkle Deegan Lake Road</p>
                    </div>
                </div>
            </div>

            {/* eight section */}

            <div id="contactForm" className="flex items-start gap-6 w-full">
                <div >
                    <form className="flex flex-col gap-6 w-full" action="">
                        <input type="text" placeholder="Enter Your Name" className="px-4 py-3 outline-none border border-gray-500" />
                        <input type="text" placeholder="Enter Email Address" className="px-4 py-3 min-w-72 outline-none border border-gray-500" />
                        <input type="text" placeholder="Enter Subject" className="px-4 py-3 min-w-72 outline-none border border-gray-500" />
                    </form>
                </div>
                <div className="flex flex-col items-end">
                    <textarea name="" placeholder="Enter Message" className="px-4 py-3 h-48  border border-gray-500 outline-none mb-4 w-full min-w-[280px]" id="" cols="30" rows="10"></textarea>
                    <Button buttonText="send message" />
                </div>
            </div>

        </div>
    )
}

export default ContactSection
