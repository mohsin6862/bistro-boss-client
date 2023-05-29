import React from 'react';

const FoodCard = ({item}) => {
    const {image,name,recipe,price}=item;
    const handleAddTOCart=(item)=>{
      console.log(item)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                <p className='absolute bg-black bg-opacity-80 rounded top-12 right-12 p-2 text-white'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='py-5'>{recipe}</p>
                <div className="card-actions">
                <button onClick={()=>{handleAddTOCart(item)}} className='btn btn-outline btn-error border-0 border-b-4'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;