// MenuTabs.js
import React from 'react';

function MenuTabs({ activeMenu, setActiveMenu }) {
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div id='menuTabs' className="flex items-center justify-around overflow-hidden mt-8 md:mt-12 my-12 bg-white rounded-lg shadow">
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'All Menu' ? 'active' : ''}`}
                onClick={() => handleMenuClick('All Menu')}
            >
                All Menu
            </p>
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'Breakfast' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Breakfast')}
            >
                Breakfast
            </p>
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'Lunch' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Lunch')}
            >
                Lunch
            </p>
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'Dinner' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Dinner')}
            >
                Dinner
            </p>
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'Budget Meal' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Budget Meal')}
            >
                Budget Meal
            </p>
            <p
                className={`py-4 md:py-10 flex-1 text-center cursor-pointer ${activeMenu === 'Buffet' ? 'active' : ''}`}
                onClick={() => handleMenuClick('Buffet')}
            >
                Buffet
            </p>
        </div>
    );
}

export default MenuTabs;
