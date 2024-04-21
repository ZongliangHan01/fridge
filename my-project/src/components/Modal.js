import React from 'react';
import { useState, useRef } from 'react';
import { Form } from 'react-router-dom';
import Button from '@mui/material/Button';


const Modal = ({onClose}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [buyDate, setBuyDate] = useState('');
    const [expiration, setExpiration] = useState('');
    const [location, setLocation] = useState('');

    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-1/2 h-1/2 border rounded-lg p-5 bg-blue-500 bg-opacity-50'>
                <div className='mb-4'>
                    Add a new item in your fridge
                </div>
                <div>
                    <form>
                        <div className='mb-4'>
                            <label className=''>Name: </label>
                            <input
                                type = "text"
                                required
                                value = {name}
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label>Quantity: </label>
                            <input
                                type = "text"
                                required
                                value = {quantity}
                            />
                        </div>
                    
                        <div className='mb-4'>
                            <label>Buy Date: </label>
                            <input
                                type = "text"
                                required
                                value = {buyDate}
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label>Expiration Date: </label>
                            <input
                                type = "text"
                                required
                                value = {expiration}
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <label>Location: </label>
                            <input
                                type = "text"
                                required
                                value = {location}
                            />
                        </div>
                        
                        
                    </form>
                </div>
                <div className='flex flex-row justify-center'>
                    <Button onClick={onClose} variant="contained" color="primary">Add</Button>
                </div>
                
            </div>
        </div>
        
    );
}

export default Modal;