import AboutSection from '../Components/AboutSection'
import Blog from '../Components/Blog'
import FilterrableGallery from '../Components/FilterrableGallery'
import Header from '../Components/Header'
import ReservedSeats from '../Components/ReservedSeats'
import Testimonial from '../Components/Testimonial'

function Home() {
    return (
        <div>
            <Header
                subtitle="WIDE OPTIONS OF CHOICE"
                title="Delicious Recipes"
                description="inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women."
            />
            <AboutSection />
            <FilterrableGallery />
            <ReservedSeats />
            <Testimonial />
            <Blog />
        </div>
    )
}

export default Home
