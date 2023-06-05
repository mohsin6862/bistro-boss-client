import React from 'react';

const MenuItems = ({item}) => {
  
    const {image,name,recipe,price}=item
    return (
        <div className='flex space-x-5'>
            <img className='w-[118px] h-[104px]' style={{borderRadius:"0px 200px 200px 200px"}} src={image} alt="" />
           <div className=''>
           <h3 className='uppercase font-bold'>{name}----------------</h3>
            <p>{recipe}</p>
           </div>
           <div>
           <p className='text-amber-600  font-bold'>${price}</p>
           </div>
        </div>
    );
};

export default MenuItems;