import React from "react";
import { useRef } from "react";
import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";

const Modal = ({ type, onClose, setRefresh, setType, selectedItem }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setType("add");
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      {type === "update" && (
        <UpdateModal
          setRefresh={setRefresh}
          setType={setType}
          selectedItem={selectedItem}
          onClose={onClose}
        />
      )}
      {type === "add" && <AddModal setRefresh={setRefresh} />}
    </div>
  );
};

export default Modal;
