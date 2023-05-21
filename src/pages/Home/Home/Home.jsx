import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import AvailableToys from '../AvailableToys/AvailableToys';
import Gallery from '../Gallery/Gallery';
import LatestProducts from '../LatestProducts/LatestProducts';
import About from '../About/About';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AvailableToys></AvailableToys>
            <About></About>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;