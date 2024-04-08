import React from 'react'

function SmallHeader(props) {
  return (
    <div className='header h-[70vh] w-full flex flex-col items-center justify-center pt-[25vh] text-white capitalize'>
      <h3 className='text-5xl font-semibold'>{props.title}</h3>
      <h4 className='text-xl pt-3'>Home &rarr; {props.pageName} </h4>
    </div>
  )
}

export default SmallHeader
