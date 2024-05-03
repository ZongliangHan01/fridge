import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Button from '@mui/material/Button';
import Modal from '../components/Modal';
import api from '../api/apiConfig';


// import '../styles/home.css';
const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [numItems, setNumItems] = useState(items.length);

    const handleAddItem = () => {
        // Update data state with new data
        setNumItems(numItems + 1);
      };

    useEffect(() => {
        setLoading(true);
        console.log("useEffect");
        api.get(
            '/JAiqbZsHi8dVdpmr0KWnIee4UHL2')
            .then((response) => {
                setItems(response.data);
                console.log(response.data[0].data.location);
                setLoading(false);
            }
            
        );
         
        
    }, [numItems]);
    
    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div className='flex flex-col'>
            
            <div className='flex flex-row h-screen'>
              
                <Container type='cooler' items={items}/>
                <Container type='freezer' items={items}/>
                
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
                {openModal && <Modal onClose={()=>{setOpenModal(false)}} onAddItem={()=>{handleAddItem()}}/> }  
            </div>
            
        </div>
    );
}

export default Home;