import React from "react";
// import "../styles/itemcontainer.css";
import DropDownMenu from "./DropDownMenu";
import api from "../api/apiConfig";
// import { set } from "react-hook-form";

const ItemContainer = ({ item, setRefresh, setOpen, setType, setSelected }) => {
  // const options = [
  //     'Update',
  //     'Delete'
  //   ];
  const date =
    item.data.location === "cooler" ? item.data.expiration : item.data.buyDate;
  const convertDate = (date) => {
    const [day, month, year] = date.split("/");
    return new Date(`${month}/${day}/${year}`);
  };

  const dayBefExp = (date) => {
    const today = new Date();
    const expDate = convertDate(date);
    const diffTime = expDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daySinceBuy = (date) => {
    const today = new Date();
    const buyDate = convertDate(date);
    const diffTime = today - buyDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleDelete = () => {
    api.delete("/JAiqbZsHi8dVdpmr0KWnIee4UHL2/" + item.id).then(() => {
      console.log("Item deleted");
      setRefresh(true);
    });
    console.log("delete");
  };

  const handleUpdate = () => {
    setOpen(true);
    setSelected(item);
    setType("update");
  };

  return (
    <div className="flex items-center flex-row pl-2 bg-blue-300 mb-10 py-3  mx-8 rounded-lg">
      <div className="  w-1/4">{item.data.name}</div>
      <div className="w-1/4">{item.data.quantity}</div>
      {item.data.location === "cooler" ? (
        <div className="w-1/2"> Expire In {dayBefExp(date)} days</div>
      ) : (
        <div className="w-1/2">{daySinceBuy(date)} days before</div>
      )}

      <DropDownMenu
        onDelete={() => handleDelete()}
        onUpdate={() => handleUpdate()}
      />
    </div>
  );
};

export default ItemContainer;
