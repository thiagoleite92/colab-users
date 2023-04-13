import React, { useState } from "react";
import AppContext from "./AppContext";
import useWindowSize from "@/hooks/useWindowSize";

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState({});

  const { width } = useWindowSize();

  const context = {
    isLoading,
    setIsLoading,
    openModal,
    setOpenModal,
    userModal,
    setUserModal,
    width,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
