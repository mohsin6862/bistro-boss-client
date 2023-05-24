import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
   const [menu]=useMenu()
   const popular = menu.filter(item => item.category === "popular")

    return (
       <section>
        <SectionTitle
        subHeading={"check it out"}
        heading={"from our menu"}
        >

        </SectionTitle>

      <div className='grid md:grid-cols-2 gap-10 my-5'>
        {
            popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
        }  
      </div>
             <div className='text-center my-4'>
                <button className='btn btn-outline btn-error border-0 border-b-4'>View full menu</button>
             </div>
          
       </section>
    );
};

export default PopularMenu;
