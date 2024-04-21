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
        <div className="item-container">
            <div className="item-name">{name}</div>
            <div className="item-quantity">{quantity}</div>
            {
                type === 'cooler' ? 
                    <div className="item-cooler"> Expire In {dayBefExp(date)} days</div> 
                :   
                    <div className="item-freezer">{daySinceBuy(date)} days before</div>
            }
            
        </div>
    )
}

export default ItemContainer;