import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import NavigationCards from '../components/NavigationCards';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Feature />
            <NavigationCards />
        </div>
    );
};

export default Home;
