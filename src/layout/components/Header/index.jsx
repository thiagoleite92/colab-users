import React from 'react';
import { TbStars } from 'react-icons/tb';
import { BsFillBookmarkStarFill, BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function Header() {
  const { push, pathname } = useRouter();

  return (
    <header
      className="
        bg-slate-100 
					border-b-2
         border-slate-400
         flex 
         justify-between
				 gap 
         text-center 
         py-2
				 px-16
         text-purple-600"
    >
      <div
        onClick={() => push('/modelos')}
        className="
					flex flex-col 
					justify-center 
					items-center 
					hover:text-purple-800 
					cursor-pointer"
      >
        <TbStars fontSize={36} />
        New Agency - Models
      </div>
      <div
        onClick={() =>
          push(pathname === '/modelos' ? '/favoritos' : '/modelos')
        }
        className="
					flex flex-col 
					justify-center 
					items-center 
					hover:text-purple-800 
					cursor-pointer"
      >
        {pathname === '/modelos' && (
          <>
            <BsFillBookmarkStarFill fontSize={20} />
            <span>Favoritos</span>
          </>
        )}
        {pathname === '/favoritos' && (
          <span>
            <BsArrowLeft />
            Voltar
          </span>
        )}
      </div>
    </header>
  );
}
