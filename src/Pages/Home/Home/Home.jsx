import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Poster from '../Poster/Poster';
import Contact from '../Contact/Contact';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import Featured from '../Featured/Featured';
import Review from '../../Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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