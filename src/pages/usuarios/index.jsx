import AppContext from '@/context/AppContext';
import HttpService from '@/service/HttpService';
import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

export default function Usuarios() {
  const httpService = new HttpService();

  const { setIsLoading, isLoading } = useContext(AppContext);

  console.log(isLoading);

  const { data, isLoading: loading } = useQuery(['fetchUsers'], () =>
    httpService.get()
  );

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return <div>Usuarios</div>;
}
