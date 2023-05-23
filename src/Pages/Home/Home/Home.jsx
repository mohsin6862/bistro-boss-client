import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Poster from '../Poster/Poster';
import Contact from '../Contact/Contact';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Review from '../../Review/Review';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <Poster></Poster>
             <PopularMenu></PopularMenu>
             <Contact></Contact>
             <ChefRecommend></ChefRecommend>
             <Featured></Featured>
             <Review></Review>
        </div>
    );
};

export default Home;