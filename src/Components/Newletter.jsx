import { FaLongArrowAltRight } from "react-icons/fa";

function Newletter() {
  return (
    <section className='px-4 sm:px-20 md:px-12 lg:px-16 py-16 w-full bg-mainRed flex items-start justify-between gap-4 flex-col sm:flex-row flex-wrap'>
      <div className="text-white w-full sm:max-w-[330px] space-y-6">
        <h2 className='font-bold text-2xl md:text-xl'>Opening Hours</h2>
        <div className="flex items-center justify-between  ">
          <p>Monday - Friday</p>
          <p>08.00 am - 10.00 pm</p>
        </div>
        <hr className='border border-gray-200 outline-none' />
        <div className="flex items-center justify-between  ">
          <p>Saturday</p>
          <p>08.00 am - 10.00 pm</p>
        </div>
        <hr className='border border-gray-200 outline-none' />
        <div className="flex items-center justify-between  ">
          <p>Sunday</p>
          <p>08.00 am - 10.00 pm</p>
        </div>
        <hr className='border border-gray-200 outline-none' />
      </div>
      <div className="text-white w-full sm:w-[300px] mt-6 sm:mt-0 space-y-3 sm:space-y-6">
        <h2 className='font-bold text-2xl md:text-xl'>Contact Us</h2>
        <p className="text-base">56/8, los angeles, rochy beach, Santa monica, United states of america - 1205</p>
        <div>
          <h2 className='text-2xl font-bold'>012-6532-568-9746</h2>
          <h2 className='text-2xl font-bold'>012-6532-568-9746</h2>
        </div>
      </div>
      <div className="text-white w-full sm:w-[300px] mt-6 sm:mt-0 space-y-4 sm:space-y-6">
        <h2 className='font-bold text-2xl md:text-xl'>Newletter</h2>
        <p className="text-base">You can trust us. we only send promo offers, not a single spam.5</p>
        <div className='bg-white flex items-center justify-between rounded-full overflow-hidden'>
          <input type="email" placeholder='Enter Your Email' className='px-4 py-2 bg-transparent border-none outline-none w-full' />
          <div className="flex items-center justify-center rounded-full bg-mainRed h-9 w-9 mr-1 flex-shrink-0">
            <FaLongArrowAltRight className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newletter
