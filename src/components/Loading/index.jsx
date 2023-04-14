import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import Modal from "react-modal";
import ReactLoading from "react-loading";

export default function Loading() {
  const { isLoading } = useContext(AppContext);

  const customStyles = {
    overlay: {
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(241,245,249)",
      width: "25%",
    },
  };

  return (
    <Modal isOpen={isLoading} style={customStyles} contentLabel="Example Modal">
      <div className="flex flex-col justify-center items-center text-purple-600">
        <span>Carregando Modelos</span>
        <ReactLoading
          type={"bars"}
          color={"#9333ea"}
          height={"25%"}
          width={"50%"}
        />
      </div>
    </Modal>
  );
}
