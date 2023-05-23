import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Poster from '../Poster/Poster';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <PopularMenu></PopularMenu>
             <Poster></Poster>
        </div>
    );
};

export default Home;