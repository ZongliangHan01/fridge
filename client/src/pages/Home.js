import React from 'react';
import Container from '../components/Container';
import '../styles/home.css';

const Home = () => {

    return (
        <div>
            <div className='home'>
                <Container type='cooler'/>
                <Container type='freezer'/>
            </div>
            
        </div>
    );
}

export default Home;