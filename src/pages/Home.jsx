import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories =useLoaderData()
    console.log(categories)
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>

            {/* heading  */}
            <Heading title={'Browse Coffees by Category '} subtitle={'choose your desired coffee category to browse through spacific coffees that fit in your test '}></Heading>

            {/* categories tab section  */}
          <Categories categories={categories}></Categories>
            {/*dynamic nested components  */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;