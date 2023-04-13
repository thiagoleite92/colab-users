import React, { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState({});

  console.log(userModal);

  const context = {
    isLoading,
    setIsLoading,
    openModal,
    setOpenModal,
    userModal,
    setUserModal,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
