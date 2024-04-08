import FoodGallery from '../Components/FoodGallery'
import SmallHeader from '../Components/SmallHeader'

function Gallery() {
  return (
    <div>
      <SmallHeader title="Our Gallery"
        pageName="gallery" />
      <FoodGallery />
    </div>
  )
}

export default Gallery
