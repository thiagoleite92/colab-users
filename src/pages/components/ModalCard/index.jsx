"use client";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillCloseSquare,
} from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import ToggleLikeButton from "../ToggleLikeButton";

import * as moment from "moment";

export default function ModalCard() {
  const { userModal, setUserModal, openModal, setOpenModal, width } =
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
      height: width > 1023 ? "50%" : "75%",
    },
  };

  const handleCloseModal = () => {
    setUserModal({});
    setOpenModal(false);
  };

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <section className="flex max-lg:flex-col gap-5">
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={picture ? picture?.large : "/assets/images/notFoundUser.jpg"}
            alt="foto"
            width={width > 1023 ? 540 : 410}
            height={width > 1023 ? 480 : 305}
            className="border-slate-300 border-2 p-1 rounded-sm"
          />
          <div className="flex justify-around w-full">
            <button
              onClick={handleCloseModal}
              className="flex gap-2 hover:text-purple-800 text-purple-600"
            >
              <AiFillCloseSquare fontSize={28} title="Fechar" />
              Fechar
            </button>
            <ToggleLikeButton userModal={userModal} />
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
            <strong>Data de Nascimento:</strong>{" "}
            {moment(dob?.date).format("DD/MM/yyyy")} - {dob?.age} anos
          </span>
          <div className="flex gap-4 max-md:flex-col">
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
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            qui repellendus obcaecati molestias assumenda, nobis natus officia
            illo sit iure facere maxime alias provident modi quaerat nisi minus
            beatae? Non?
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <strong>Entre em contato</strong>
            <div className="flex gap-5 max-md:flex-col">
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
