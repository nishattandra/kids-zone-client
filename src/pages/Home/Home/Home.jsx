import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import AvailableToys from '../AvailableToys/AvailableToys';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AvailableToys></AvailableToys>
        </div>
    );
};

export default Home;