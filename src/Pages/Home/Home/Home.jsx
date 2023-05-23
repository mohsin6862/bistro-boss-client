import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Poster from '../Poster/Poster';
import Contact from '../Contact/Contact';
import ChefRecommend from '../ChefRecommend/ChefRecommend';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <Poster></Poster>
             <PopularMenu></PopularMenu>
             <Contact></Contact>
             <ChefRecommend></ChefRecommend>
        </div>
    );
};

export default Home;