import React from 'react'
import ServiceCard from './ServiceCard'
import Service1 from "../assets/service1.webp"
import Service2 from "../assets/service2.webp"
import Service3 from "../assets/service3.webp"

function Service() {
    return (
        <div>
            <section className='px-4 sm:px-8 md:px-12 lg:px-16 pb-16 pt-4 w-full gap-8'>
                <h1 className="text-center text-3xl md:text-4xl font-bold pb-3">What kind of Foods we serve for you</h1>
                <h4 className='text-center text-dimWhite'>Who are in extremely love with eco friendly system.</h4>

                <div className="ServiceCardContainer pt-8">
                    <ServiceCard img={Service1} title="Bread Fruit Cheese Sandwich" />
                    <ServiceCard img={Service2} title="Beef Cutlet with Spring Onion" />
                    <ServiceCard img={Service3} title="Meat with sauce & Vegetables" />
                </div>

            </section>
        </div>
    )
}

export default Service
