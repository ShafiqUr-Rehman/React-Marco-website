import { foodgallery } from "../data"

function FoodGallery() {
  return (
    <div className="foodGallery px-4 py-12 md:px-16">
      {
        foodgallery.map((item,index) => (
            <img key={index} src={item.url} alt="food image" />
        ))
      }
    </div>
  )
}

export default FoodGallery
