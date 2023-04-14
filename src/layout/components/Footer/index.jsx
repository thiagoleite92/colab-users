import { useQueryClient } from "react-query";
import React, { useState } from "react";

export default function ModelsFilter() {
  const queryClient = useQueryClient();

  const [filterGender, setFilterGender] = useState("Male");

  console.log(filterGender);

  const handleFilter = (e) => {
    e.preventDefault();
    queryClient.invalidateQueries("fetchModels");
  };

  return (
    <footer
      className="
      bg-slate-100 
        border-t-2
        border-slate-400
        py-5
        px-10
        flex
        justify-start
        items-center

        "
    >
      <form className="flex gap-5 justify-start items-center">
        <label
          className="flex justify-center items-center gap-2"
          onChange={(e) => setFilterGender(e.target.value)}
          htmlFor="gender"
        >
          <input
            type="checkbox"
            value="Homens"
            name="gender"
            className="mr-3 h-5 w-5 cursor-pointer accent-purple-600 hover:accent-purple-800"
          />{" "}
          Homens
          <input
            type="checkbox"
            value="Mulheres"
            name="gender"
            className="mr-3 h-5 w-5 cursor-pointer accent-purple-600 hover:accent-purple-800"
          />{" "}
          Mulheres
        </label>
        <button
          type="button"
          onClick={(e) => handleFilter(e)}
          className="bg-purple-600 hover:bg-purple-800 py-1 px-6 rounded-md text-white text-bold"
        >
          Buscar Modelos
        </button>
      </form>
    </footer>
  );
}
