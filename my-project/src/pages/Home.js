import React, { useState } from "react";
import Container from "../components/Container";
import Button from "@mui/material/Button";
import Modal from "../components/Modal";

// import '../styles/home.css';
const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState(true);
  const [ModalType, setModalType] = useState("add");
  const [selectedItem, setSelectedItem] = useState({});

  const setRefresh = (status) => {
    setIsRefresh(status);
  };

  const setOpen = (status) => {
    setOpenModal(status);
  };

  const setType = (type) => {
    setModalType(type);
  };

  const setSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-screen">
        <Container
          type="cooler"
          isRefresh={isRefresh}
          setRefresh={setRefresh}
          setOpen={setOpen}
          setType={setType}
          setSelected={setSelected}
        />
        <Container
          type="freezer"
          isRefresh={isRefresh}
          setRefresh={setRefresh}
          setOpen={setOpen}
          setType={setType}
          setSelected={setSelected}
        />
      </div>
      <div className="flex flex-row justify-center">
        <Button
          className="top-[-20vh]  w-20 h-10"
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          add
        </Button>
      </div>

      <div className="flex flex-row justify-center top-[-20vh]">
        {openModal && (
          <Modal
            onClose={() => {
              setOpenModal(false);
            }}
            setRefresh={setRefresh}
            type={ModalType}
            setType={setType}
            selectedItem={selectedItem}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
