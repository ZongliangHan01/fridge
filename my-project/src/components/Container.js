import React from "react";
import api from '../api/apiConfig';
import {useState, useEffect} from 'react';
import ItemContainer from "./ItemContainer";
// import "../styles/container.css";

const Container = ({type}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // const getItems = async () => {
    //     console.log("getItems");
    //     // setItems([]);
    //     const response = await api.get(
    //         '/JAiqbZsHi8dVdpmr0KWnIee4UHL2')
    //         .then((response) => {
    //             setItems(response.data);
    //             setLoading(false);
    //         }
            
    //     );
        
    //     for (let i = 0; i < items.length; i++) {
    //         console.log(items[i].data.name);
    //     }
        
    // }

    useEffect(() => {
        setLoading(true);
        
        api.get(
            '/JAiqbZsHi8dVdpmr0KWnIee4UHL2')
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            }
            
        );
        
        
         
        
    }, []);
    
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="title">{type}</div> 
            {
                items.map(item => {
                    if (item.data.location === type) {
                        return (
                            <ItemContainer
                                key={item.id}
                                name={item.data.name}
                                quantity={item.data.quantity}
                                date={type==='cooler' ? item.data.expiration : item.data.buyDate}
                                type={item.data.location}
                            />
                        )
                    } else {
                        return null;
                    }
                    
                })
            }
        </div>
    )
}

export default Container;