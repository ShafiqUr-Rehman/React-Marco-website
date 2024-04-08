import Button from './Button'
import Image from "../assets/img1.jpg"

function AboutSection() {
  return (
    <section className='flex items-center justify-between md:flex-row flex-col px-4 sm:px-20 md:px-12 lg:px-16 py-12 md:py-16 min-h-[90vh] w-full gap-8'>
        {/* left section */}

        <div className="w-full md:w-1/2 space-y-6">
            <h1 className='text-4xl font-bold'>About Our Story</h1>
            <p className='text-dimWhite text-balance'>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button buttonText="view full menu" />
        </div>

        <div className="w-full md:w-1/2 h-auto md:h-[60vh]">
            <img className='w-full h-full object-cover' src={Image} alt="burger" />
        </div>
      
    </section>
  )
}

export default AboutSection
