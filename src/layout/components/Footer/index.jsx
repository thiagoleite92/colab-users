import SelectInput from "@/components/SelectInput";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const quantityOptions = [
  { label: "14", value: "14" },
  { label: "21", value: "21" },
  { label: "28", value: "28" },
  { label: "35", value: "35" },
];

export default function ModelsFilter() {
  const { newQuery } = useContext(AppContext);

  const { pathname } = useRouter();

  const [params, setParams] = useState({
    quantity: "14",
    gender: "",
    nat: "",
  });

  const searchParams = ({ gender, quantity: results, nat }) => {
    const search = {
      gender,
      nat,
      results,
    };

    return new URLSearchParams(search).toString();
  };

  const handleSelect = ({ value }, { name }) => {
    setParams((oldState) => ({ ...oldState, [name]: value }));
  };

  useEffect(() => {
    newQuery(searchParams(params));
  }, [newQuery, params]);

  return (
    <>
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
        {pathname === "/modelos" && (
          <form className="flex gap-5 justify-start items-center max-md:flex-col">
            <SelectInput
              options={genderOptions}
              menuPlacement="top"
              placeHolder="Gênero"
              label="Gênero"
              onChange={handleSelect}
              name="gender"
            />
            <SelectInput
              options={natOptions}
              menuPlacement="top"
              placeHolder="Nacionalidade"
              label="Nacionalidade"
              onChange={handleSelect}
              name="nat"
            />
            <SelectInput
              options={quantityOptions}
              menuPlacement="top"
              placeHolder="Resultados"
              label="Resultados"
              onChange={handleSelect}
              name="quantity"
            />
          </form>
        )}
        {pathname === "/favoritos" && (
          <span className="flex items-center justify-center w-full text-purple-600 pb-2 break-words">
            Todos os direitos Reservados &copy;
          </span>
        )}
      </footer>
    </>
  );
}
