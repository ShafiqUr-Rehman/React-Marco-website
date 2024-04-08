
function ReservedSeats() {
  return (
    <section id="reservedSection" className="flex items-center justify-between md:flex-row flex-col px-4 sm:px-20 md:px-12 lg:px-16 py-16 min-h-screen w-full gap-8">
      {/* left section */}

    <div className="w-full md:w-1/2 text-white space-y-4">
        <h1 className="text-[40px] text-balance font-bold leading-[50px] ">Reserve Your Seats to Confirm if You Come with Your Family</h1>
        <p className="text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
    </div>

    {/* right section */}

    <div className="w-full md:w-[380px] bg-white py-12 md:py-24 px-8 space-y-3">
        <input className="px-4 py-3 w-full border border-gray-500 outline-none text-base" type="text" placeholder="Your Name" />
        <input className="px-4 py-3 w-full border border-gray-500 outline-none text-base" type="email" placeholder="Your Email Address" />
        <input className="px-4 py-3 w-full border border-gray-500 outline-none text-base" type="number" placeholder="Phone Number" />
        <input className="px-4 py-3 w-full border border-gray-500 outline-none text-base" type="datetime-local" placeholder="Select Date & Time" />
        <select className="px-4 py-3 w-full border border-gray-500 outline-none text-base" name="" id="">
            <option value="">Select Event</option>
            <option value="">Event 1</option>
            <option value="">Event 2</option>
            <option value="">Event 3</option>
            <option value="">Event 4</option>
            <option value="">Event 5</option>
        </select>
    </div>
      
    </section>
  )
}

export default ReservedSeats
