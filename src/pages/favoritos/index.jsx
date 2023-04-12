import AppContext from '@/context/AppContext';
import React, { useContext } from 'react';

export default function Favorites() {
  const { isLoading } = useContext(AppContext);

  console.log(isLoading);
  return <div>Favorites</div>;
}
