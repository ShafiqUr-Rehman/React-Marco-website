import React from 'react'
import SmallHeader from '../Components/SmallHeader'
import FilterrableGallery from '../Components/FilterrableGallery'
import ReservedSeats from '../Components/ReservedSeats'

function Menu() {
  return (
    <div>
      <SmallHeader title="Menu"
        pageName="menu" />
      <FilterrableGallery />
      <ReservedSeats />
    </div>
  )
}

export default Menu
