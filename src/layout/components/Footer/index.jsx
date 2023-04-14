import SelectInput from "@/components/SelectInput";
import AppContext from "@/context/AppContext";
import React, { useCallback, useContext, useState } from "react";

const genderOptions = [
  { label: "Todos", value: "" },
  { label: "Homens", value: "male" },
  { label: "Mulheres", value: "female" },
];

const natOptions = [
  { label: "Todos", value: "" },
  { label: "Brasil", value: "br" },
  { label: "Estados Unidos", value: "us" },
  { label: "França", value: "fr" },
  { label: "Turquia", value: "tr" },
];

export default function ModelsFilter() {
  const { newQuery } = useContext(AppContext);

  const [genderSearch, setGenderSearch] = useState();

  const [natSearch, setNatSearch] = useState();

  const searchParams = (gender, nat) => {
    const params = {
      gender,
      nat,
    };

    console.log(params);

    return new URLSearchParams(params).toString();
  };

  const handleGender = ({ value }) => {
    newQuery(searchParams(value, natSearch));

    setGenderSearch(value);
  };

  const handleNat = ({ value }) => {
    newQuery(searchParams(genderSearch, value));

    setNatSearch(value);
  };

  return (
    <footer
      className="
      bg-slate-100 
        border-t-2
        border-slate-400
        pt-1
        px-10
        flex
        justify-start
        items-center
        "
    >
      <form className="flex gap-5 justify-start items-center max-md:flex-col">
        <SelectInput
          options={genderOptions}
          menuPlacement="top"
          placeHolder="Gênero"
          label="Gênero"
          onChange={handleGender}
        />
        <SelectInput
          options={natOptions}
          menuPlacement="top"
          placeHolder="Nacionalidade"
          label="Nacionalidade"
          onChange={handleNat}
        />

        {/* <button
          type="button"
          onClick={() => newQuery()}
          className="bg-purple-600 hover:bg-purple-800 py-1 px-6 rounded-md text-white text-bold"
        >
          Buscar Modelos
        </button> */}
      </form>
    </footer>
  );
}
