import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuCover from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu]=useMenu()
   const dessert = menu.filter(item => item.category === "dessert")
   const offered = menu.filter(item => item.category === "offered")
   const pizza = menu.filter(item => item.category === "pizza")
   const soup = menu.filter(item => item.category === "soup")
   const salad = menu.filter(item => item.category === "salad")
   const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover img={menuCover} title={"OUR MENU"} description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <SectionTitle heading={"today's offer"} subHeading={"Don't miss"}></SectionTitle>
            {/* offer menu */}
           <CategoryMenu item={offered}></CategoryMenu>
           {/* dessert Menu */}
           <CategoryMenu item={dessert} img={dessertImg} title={"dessert"} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus nostrum nemo soluta debitis at laudantium, quae cumque doloribus nihil culpa nam alias, ipsam iste? Nemo iure ipsum deleniti quidem?"></CategoryMenu>
           {/* pizza */}
           <CategoryMenu item={pizza} img={pizzaImg} title={"pizza"} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus nostrum nemo soluta debitis at laudantium, quae cumque doloribus nihil culpa nam alias, ipsam iste? Nemo iure ipsum deleniti quidem?"></CategoryMenu>
           {/* Salad */}
           <CategoryMenu item={salad} img={saladImg} title={"salad"} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus nostrum nemo soluta debitis at laudantium, quae cumque doloribus nihil culpa nam alias, ipsam iste? Nemo iure ipsum deleniti quidem?"></CategoryMenu>
           {/* Soup */}
           <CategoryMenu item={soup} img={soupImg} title={"soup"} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repellendus nostrum nemo soluta debitis at laudantium, quae cumque doloribus nihil culpa nam alias, ipsam iste? Nemo iure ipsum deleniti quidem?"></CategoryMenu>
        </div>
    );
};

export default Menu;