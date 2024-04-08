import React from 'react'
import SmallHeader from '../Components/SmallHeader'
import AboutSection from '../Components/AboutSection'
import Testimonial from '../Components/Testimonial'
import Service from '../Components/Service'

function About() {
  return (
    <div>
      <SmallHeader title="About us"
        pageName="about" />
      <AboutSection />
      <Service />
      <Testimonial />
    </div>
  )
}

export default About
