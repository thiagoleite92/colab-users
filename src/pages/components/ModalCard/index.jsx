"use client";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import Modal from "react-modal";

export default function ModalCard() {
  const { userModal, setUserModal, openModal, setOpenModal } =
    useContext(AppContext);

  console.log(userModal);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(241,245,249, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(241,245,249)",
    },
  };

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const handleCloseModal = () => {
    setUserModal({});
    setOpenModal(false);
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={handleCloseModal}>close</button>
    </Modal>
  );
}
