"use client";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillCloseSquare,
  AiOutlineStar,
} from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

export default function ModalCard() {
  const { userModal, setUserModal, openModal, setOpenModal } =
    useContext(AppContext);

  const { picture, location, cell, dob, email, nat, name, phone } = userModal;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(241,245,249)",
      width: "75%",
      height: "50%",
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
      <section className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Image
            src={picture?.large}
            alt={`${name?.first} ${name?.last}`}
            width={540}
            height={480}
          />
          <div className="flex justify-between">
            <button
              onClick={handleCloseModal}
              className="flex gap-2 hover:text-purple-800 text-purple-600"
            >
              <AiFillCloseSquare fontSize={28} title="Fechar" />
              Fechar
            </button>
            <button className="flex gap-2 hover:text-purple-800 text-purple-600">
              Favoritar
              <AiOutlineStar fontSize={28} title="Favoritar" />
            </button>
          </div>
        </div>
        <div
          className="flex flex-col gap-3 border- py-2 px-4 border
        rounded-sm border-slate-400
        shadow-lg text-purple-600"
        >
          <span>
            <strong>Nome:</strong> {`${name?.first} ${name?.last}`}
          </span>
          <span>
            <strong>Data de Nascimento:</strong> {dob?.date} - {dob?.age} anos
          </span>
          <div className="flex gap-4">
            <span>
              <strong>Nacionalidade:</strong> {nat}
            </span>
            <span>
              <strong>País:</strong> {location?.country}
            </span>
            <span>
              <strong>Estado:</strong> {location?.state}
            </span>
          </div>
          <strong>Trabalhos realizados:</strong>
          <p className="break-words">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            qui repellendus obcaecati molestias assumenda, nobis natus officia
            illo sit iure facere maxime alias provident modi quaerat nisi minus
            beatae? Non?
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <strong>Contatos</strong>
            <div className="flex gap-5">
              <span className="contact-span">
                <AiOutlineWhatsApp />
                {cell}
              </span>
              <span className="contact-span">
                <AiOutlineMail />
                {email}
              </span>
              <span className="contact-span">
                <BsFillTelephoneInboundFill />
                {phone}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}
