import React from 'react'

function Button(props) {
  return (
    <div>
      <button className='px-8 py-3 text-sm md:text-base bg-mainRed text-white uppercase hover:bg-black transition duration-500 font-semibold'>{props.buttonText}</button>
    </div>
  )
}

export default Button
