// FilterrableGallery.js
import { useState } from 'react';
import MenuTabs from './MenuTabs';
import MenuItem from './MenuItem';

function FilterrableGallery() {
    const [activeMenu, setActiveMenu] = useState('All Menu');

    return (
        <section className='bg-LightSkyBlue px-4 sm:px-8 md:px-12 lg:px-16 py-16 min-h-[60vh] w-full gap-8'>
            <h1 className="text-center text-3xl md:text-4xl font-bold pb-3">What kind of Foods we serve for you</h1>
            <h4 className='text-center text-dimWhite'>Who are in extremely love with eco friendly system.</h4>

            {/* filters menu */}
            <MenuTabs activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            {/* food menu */}
            <MenuItem activeMenu={activeMenu} />

        </section>
    );
}

export default FilterrableGallery;
