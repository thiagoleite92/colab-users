import React, { useContext } from "react";
import Image from "next/image";
import AppContext from "@/context/AppContext";

export default function ModelCards({ user }) {
  const { setOpenModal, setUserModal } = useContext(AppContext);

  const handleModal = (user) => {
    setUserModal(user);
    setOpenModal(true);
  };

  return (
    <>
      <li
        className="flex-col border-2 px-5 py-2 mx-auto shadow-lg
    shadow-slate-400 flex gap-2 w-48 h-64 items-center"
      >
        <Image
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          width="100"
          height="100"
          priority
        />
        <div className="flex flex-col text-xs">
          <span>
            <strong>Nome: </strong>
            {`${user.name.first} ${user.name.last}`}
          </span>
          <div className="flex-col flex gap-6 mt-2">
            <span>
              <strong>Idade:</strong> {user.dob.age}
            </span>
            <button
              className="bg-purple-600 hover:bg-purple-800 rounded py-4 px-4 font-bold text-white"
              onClick={() => handleModal(user)}
              type="button"
            >
              Visualizar Perfil
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
