import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import chefRec1 from '../../../assets/home/slide1.jpg'
import chefRec2 from '../../../assets/home/slide2.jpg'
import chefRec3 from '../../../assets/home/slide3.jpg'


const ChefRecommend = () => {
    return (
        <div className='my-20'>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"Should try"}
            ></SectionTitle>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
         <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefRec1} alt="Shoes" className=" h-72 w-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-error border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefRec2} alt="Shoes" className=" h-72 w-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toumimum Pizza</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-error border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefRec3} alt="Shoes" className=" h-72 w-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Creamy Mashroom Soup</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-error border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
         </div>

        </div>
    );
};

export default ChefRecommend;