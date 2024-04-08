import React from 'react'

function ServiceCard(props) {
    return (
        <div className='space-y-2'>
            <img className='w-full' src={props.img} alt="Service Image" />
            <h2 className='text-xl font-bold hover:text-mainRed'>{props.title}</h2>
            <p className='text-dimWhite text-balance'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
        </div>
    )
}

export default ServiceCard
