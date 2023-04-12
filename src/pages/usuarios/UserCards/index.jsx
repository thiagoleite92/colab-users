import React from 'react';
import Image from 'next/image';

export default function UserCards({ user }) {
  console.log(user);

  const handleModal = (user) => {
    console.log(user);
  };

  return (
    <li
      className="flex-col border-2 px-5 py-2 mx-auto shadow-lg
    shadow-slate-400 flex gap-2 w-48 h-64"
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
        <div className="flex-col flex gap-2 mt-2">
          <span>
            <strong>Idade:</strong> {user.dob.age}
          </span>
          <span>
            <strong>Nacionalidade:</strong> {user.nat}
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
  );
}
