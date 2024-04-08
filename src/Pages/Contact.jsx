import React from 'react'
import SmallHeader from '../Components/SmallHeader'
import Map from '../Components/Map'
import ContactSection from '../Components/ContactSection'

function Contact() {
  return (
    <div className='bg-LightSkyBlue'>
      <SmallHeader title="Contact us"
        pageName="contact" />
      <Map />
      <ContactSection />
    </div>
  )
}

export default Contact
