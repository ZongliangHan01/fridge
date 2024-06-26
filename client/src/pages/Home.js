import React from 'react';
import Container from '../components/Container';
import Button from '@mui/material/Button';
import Modal from '../components/Modal';
// import '../styles/home.css';
const Home = () => {

    return (
        <div className='page bg-blue-500'>
            
            <div className='home bg-blue-500 flex-row min-h-screen'>
              
                <Container type='cooler'/>
                <Container type='freezer'/>
                
            </div>
            <Button className='button' variant="contained" color="primary">Add</Button>
            <Modal/>
        </div>
    );
}

export default Home;