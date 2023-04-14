import React, { useContext } from "react";
import ModelCards from "../components/ModelCards";
import AppContext from "@/context/AppContext";
import FavoritesNotFound from "../components/FavoritesNotFound";

export default function Favorites() {
  const { saved } = useContext(AppContext);

  return (
    <>
      <ul className="flex gap-2 flex-wrap h-fit items-center justify-center">
        {saved?.length ? (
          saved?.map((user) => {
            return (
              <ModelCards key={user.id.value || Math.random()} user={user} />
            );
          })
        ) : (
          <FavoritesNotFound />
        )}
      </ul>
    </>
  );
}
