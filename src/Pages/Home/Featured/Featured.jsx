import React from 'react';
import picture from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css'
const Featured = () => {
    return (
        <div className='feature my-20 p-12 text-white bg-fixed'>
           <div className='w-full p-8  bg-black bg-opacity-30'>
           <SectionTitle
            heading={"From our menu"}
            subHeading={"Check it out"}
            ></SectionTitle>
           <div className='md:flex  justify-center items-center'>
           <div className='w-1/2'>
           <img src={picture} alt="" />
           </div>
            <div className='w-1/2 ml-8 '>
                <h1>20 May 2023</h1>
                <h1>Where can i ger some?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis tenetur fugiat doloremque debitis et eos praesentium deserunt itaque alias labore vero ea atque repellendus natus corporis soluta repellat, ipsum ducimus a ratione facere. Corrupti deserunt in aspernatur ipsam ad.</p>
                <button className='btn btn-outline btn-error border-0 border-b-4'>View full menu</button>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Featured;