import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuCover from '../../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Menu</title>

      </Helmet>
        <Cover img={menuCover} title={"OUR MENU"} description="WOULD YOU LIKE TO TRY A DISH?">

        </Cover>
        </div>
    );
};

export default Menu;