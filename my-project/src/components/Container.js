import React from "react";
import api from '../api/apiConfig';
import {useState, useEffect} from 'react';
import ItemContainer from "./ItemContainer";
import { useAuth } from "./AuthProvider";
// import "../styles/container.css";

const Container = ({type, isRefresh, setRefresh, setOpen, setType, setSelected}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const {uid} = useAuth();
    useEffect(() => {
        if (isRefresh) {
            setLoading(true);
            api.get(
                `/fridge/${uid}`)
                .then((response) => {
                    setItems(response.data);
                    setLoading(false);
                    setRefresh(false);
                }
                
            );
        }
        
         
        
    }, [isRefresh, setRefresh, uid]);
    
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
                                item={item}
                                setRefresh={setRefresh}
                                setOpen={setOpen}
                                setType={setType}
                                setSelected={setSelected}
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