import React from "react";
// import "../styles/itemcontainer.css";

const ItemContainer = ({type, name, quantity, date }) => {

    const convertDate = (date) => {
        const [day, month, year] = date.split('/');
        return new Date(`${month}/${day}/${year}`);
    }

    const dayBefExp = (date) => {
        const today = new Date();
        const expDate = convertDate(date);
        const diffTime = expDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    const daySinceBuy = (date) => {
        const today = new Date();
        const buyDate = convertDate(date);
        const diffTime = today - buyDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    return (
        <div className="flex flex-row pl-2 bg-blue-300 mb-10 py-3  mx-8 rounded-lg">
            <div className="w-1/4">{name}</div>
            <div className="w-1/4">{quantity}</div>
            {
                type === 'cooler' ? 
                    <div className="w-1/2"> Expire In {dayBefExp(date)} days</div> 
                :   
                    <div className="w-1/2">{daySinceBuy(date)} days before</div>
            }
            
        </div>
    )
}

export default ItemContainer;