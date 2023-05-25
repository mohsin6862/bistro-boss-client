import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import foodImg from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';

import OrderCategory from './OrderCategory/OrderCategory';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categoris = ['salad','pizza','soup','dessert','drinks']
    const{category}=useParams()
    const initialIndex = categoris.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]=useMenu()
    console.log(category)
    const dessert = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Cover img={foodImg} title={"Our FOOD"} description={"WOULD YOU LIKE TO TRY A DISH"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Offer</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                <OrderCategory items={salad}></OrderCategory>
                </TabPanel>
                <TabPanel>
                <OrderCategory items={pizza}></OrderCategory>
                </TabPanel>
                <TabPanel>
                <OrderCategory items={soup}></OrderCategory>
                </TabPanel>
                <TabPanel>
                <OrderCategory items={dessert}></OrderCategory>
                </TabPanel>
                <TabPanel>
                <OrderCategory items={offered}></OrderCategory>
                </TabPanel>
                <TabPanel>
                <OrderCategory items={drinks}></OrderCategory>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;