import BlogItem from "./BlogItem"
import image1 from "../assets/img5.jpg"
import image2 from "../assets/img8.jpg"
import image3 from "../assets/img2.jpg"
import image4 from "../assets/img10.jpg"

function Blog() {
    return (
        <section className='bg-LightSkyBlue flex flex-col items-center px-4 md:px-12 lg:px-16 py-16 min-h-screen w-full gap-4'>
            <h1 className="text-center text-4xl font-bold">Latest From Our Blog</h1>
            <h4 className='text-center text-dimWhite w-full md:w-8/12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <div id="blogContainer" className="flex items-center xl:justify-between justify-center gap-6 flex-wrap pt-8">
                <BlogItem title="Cooking Perfect Fried Rice in minutes" img={image1} />
                <BlogItem title="Secret of making Heart Shaped eggs" img={image2} />
                <BlogItem title="How to check steak if it is tender or not" img={image3} />
                <BlogItem title="Seaseme and black seed Flavored Bun Rocks" img={image4} />
            </div>
        </section>
    )
}

export default Blog
