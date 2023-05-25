import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';
import Category from '../../Home/Category/Category';

const CategoryMenu = ({item,title,img,description}) => {
    
    return (
        <div className='my-20'>
          { title && <Cover img={img} title={title} description={description}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-10'>
        {
            item.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
        }  
      </div>
             <div className='text-center my-4'>
               <Link to={`/order/${title}`}> <button className='btn btn-outline btn-error border-0 border-b-4'>Order Your Favourite Food</button></Link>
             </div>
        </div>
    );
};

export default CategoryMenu;