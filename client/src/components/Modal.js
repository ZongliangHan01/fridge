import React from 'react';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/modal.css';

const Modal = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [buyDate, setBuyDate] = useState('');
    const [expiration, setExpiration] = useState('');
    const [location, setLocation] = useState('');
    return (
        <div className='modal'>
            <div>
                Add a new item in your fridge
            </div>
            <div>
                <form>
                    <label>Name:
                        <input
                            type = "text"
                            required
                            value = {name}
                        />  
                    </label>
                    <br/>
                    <label>Quantity:
                        <input
                            type = "text"
                            required
                            value = {quantity}
                        />
                    </label>
                    <br/>
                    <label>Buy Date:
                        <input
                            type = "text"
                            required
                            value = {buyDate}
                        />
                    </label>
                    <br/>
                    <label>Expiration Date:
                        <input
                            type = "text"
                            required
                            value = {expiration}
                        />
                    </label>
                    <br/>
                    <label>Location:
                        <input
                            type = "text"
                            required
                            value = {location}
                        />
                    </label>
                    <br/>
                    
                </form>
            </div>
            <Button className='bu' variant="contained" color="primary">Add</Button>
        </div>
    );
}

export default Modal;