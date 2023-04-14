import React, { useEffect, useMemo, useState } from "react";
import AppContext from "./AppContext";
import useWindowSize from "@/hooks/useWindowSize";
import { useMutation, useQuery } from "react-query";
import HttpService from "@/service/HttpService";
import FavoriteService from "@/service/FavoriteService";

export default function AppProvider({ children }) {
  const httpService = new HttpService();
  const favoriteService = useMemo(() => new FavoriteService(), []);

  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState({});
  const [saved, setSaved] = useState([]);
  const [newModels, setNewModels] = useState(null);

  const { width } = useWindowSize();

  const { data, isLoading: isLoaded } = useQuery(["fetchModels"], () =>
    httpService.get()
  );

  const { mutate: newQuery } = useMutation(async (url) => {
    try {
      setIsLoading(true);
      const teste = await httpService.get(url);
      setNewModels(teste);
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    setIsLoading(isLoaded);
  }, [isLoaded]);

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
    models: newModels || data,
    saved,
    setSaved,
    newQuery,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
