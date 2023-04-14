import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import ModelCards from "../components/ModelCards";

export default function Usuarios() {
  const { models } = useContext(AppContext);

  return (
    <ul className="flex gap-2 flex-wrap items-center justify-center">
      {models?.results?.map((user) => {
        return <ModelCards key={user.id.value || Math.random()} user={user} />;
      })}
    </ul>
  );
}
