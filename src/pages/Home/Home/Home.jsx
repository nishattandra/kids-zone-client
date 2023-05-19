import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import AvailableToys from '../AvailableToys/AvailableToys';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <AvailableToys></AvailableToys>
        </div>
    );
};

export default Home;