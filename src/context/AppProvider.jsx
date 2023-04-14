import React, { useEffect, useMemo, useState } from "react";
import AppContext from "./AppContext";
import useWindowSize from "@/hooks/useWindowSize";
import { useQuery } from "react-query";
import HttpService from "@/service/HttpService";
import FavoriteService from "@/service/FavoriteService";

export default function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState({});
  const [saved, setSaved] = useState([]);

  const { width } = useWindowSize();

  const httpService = new HttpService();
  const favoriteService = useMemo(() => new FavoriteService(), []);

  const { data, isLoading: fetchLoad } = useQuery(["fetchModels"], () =>
    httpService.get()
  );

  useEffect(() => {
    setIsLoading(fetchLoad);
  }, [fetchLoad]);

  useEffect(() => {
    const favoritos = favoriteService.favoritos();

    setSaved(favoritos);
  }, [favoriteService]);

  const context = {
    isLoading,
    setIsLoading,
    openModal,
    setOpenModal,
    userModal,
    setUserModal,
    width,
    models: data,
    saved,
    setSaved,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
