import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '@mui/material/Button';
import Modal from '../components/Modal';

// import '../styles/home.css';
const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    

    return (
        <div className='flex flex-col'>
            
            <div className='flex flex-row h-screen'>
              
                <Container type='cooler'/>
                <Container type='freezer'/>
                
            </div>
            <div className='flex flex-row justify-center'>
                <Button className='top-[-20vh]  w-20 h-10' 
                        variant="contained" 
                        color="primary"
                        onClick={() => setOpenModal(true)}
                >
                    add
                </Button>
            </div>

            <div className='flex flex-row justify-center top-[-20vh]'>
                {openModal && <Modal onClose={()=>{setOpenModal(false)}}/> }  
            </div>
            
        </div>
    );
}

export default Home;