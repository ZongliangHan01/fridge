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
        // setLoading(true);
        // console.log("useEffect");
        // api.get(
        //     '/JAiqbZsHi8dVdpmr0KWnIee4UHL2')
        //     .then((response) => {
        //         setItems(response.data);
        //         setLoading(false);
        //     }
            
        // );
        setItems([
            {
                id: 1,
                data: {
                    name: 'Milk',
                    quantity: 1,
                    expiration: '12/12/2021',
                    location: 'cooler'
                }
            },
            {
                id: 2,
                data: {
                    name: 'Ice Cream',
                    quantity: 1,
                    expiration: '12/12/2021',
                    buyDate: '12/12/2021',
                    location: 'freezer'
                }
            },
            {
                id: 3,
                data: {
                    name: 'Apple',
                    quantity: 1,
                    expiration: '12/12/2021',
                    buyDate: '12/12/2021',
                    location: 'cooler'
                }
            },
            {
                id: 4,
                data: {
                    name: 'Roti',
                    quantity: 1,
                    expiration: '12/12/2021',
                    buyDate: '12/12/2021',
                    location: 'freezer'
                }
            },
        ]);
        
        
         
        
    }, []);
    
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="mt-20 border w-1/2 overflow-scroll overscroll-none ">
            <div className="p-5 fixed bg-blue-200 ml-10 mt-5 rounded-full ">{type}</div> 
            <div className="mt-24 h-screen">
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
            
        </div>
    )
}

export default Container;