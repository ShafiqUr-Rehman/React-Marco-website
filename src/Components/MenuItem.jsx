import React from 'react';
import foodItems from '../data';

function MenuItem({ activeMenu }) {
  const filteredItems = activeMenu === 'All Menu' ? foodItems : foodItems.filter(item => item.category === activeMenu);

  return (
    <>
      <div className='foodMenu'>
        {filteredItems.map((item, index) => (
          <div className='bg-white p-8 space-y-3 shadow-md rounded-md' key={index}>
            <div className="flex items-center justify-between">
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <h3 className='text-xl text-mainRed font-bold'>${item.price}</h3>
            </div>
            <p className='text-dimWhite text-balance text-base'>{item.description}.</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuItem;
