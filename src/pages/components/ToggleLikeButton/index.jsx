import AppContext from "@/context/AppContext";
import FavoriteService from "@/service/FavoriteService";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function ToggleLikeButton({ userModal }) {
  const favoriteService = useMemo(() => new FavoriteService(), []);

  const { setSaved } = useContext(AppContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    favoriteService.toggleFavorito(userModal);
    setSaved(favoriteService.favoritos());
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const favoritos = favoriteService.favoritos();

    setIsLiked(
      favoritos.some((fav) => fav?.id?.value === userModal?.id?.value)
    );
  }, [favoriteService, userModal?.id?.value]);

  return (
    <button
      className="flex gap-2 hover:text-purple-800 text-purple-600"
      onClick={() => handleToggle()}
    >
      {!isLiked && (
        <span className="flex gap-2">
          Salvar <AiOutlineStar fontSize={28} title="Gostei" />
        </span>
      )}
      {isLiked && (
        <span className="flex gap-2">
          Remover <AiFillStar fontSize={28} title="Remover" />
        </span>
      )}
    </button>
  );
}
