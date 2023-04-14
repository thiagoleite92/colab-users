import React from "react";
import { useRouter } from "next/router";

export default function FavoritesNotFound() {
  const { push } = useRouter();

  return (
    <section className="items-center border-2 justify-center flex flex-col gap-5 w-96 h-52 text-purple-600">
      <span>Nenhum Modelo Favoritado</span>
      <button
        className="rounded-md bg-purple-600 hover:bg-purple-800 text-white py-3 px-6"
        onClick={() => push("/modelos")}
      >
        Conhecer Modelos
      </button>
    </section>
  );
}
