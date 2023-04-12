import React from 'react';

export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-0 
        w-full
        h-12"
    >
      <nav
        className="
        bg-slate-100 
        border-t-2
        border-slate-400
        py-2
        px-10"
      >
        <ul
          className="
        w-100
        flex 
        justify-start 
        gap-8
        child-hover:text-purple-800 
        child:text-purple-600 
        child-hover:cursor-pointer"
        >
          <li>Contato</li>
          <li>Todos os Direitos Reservados</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </footer>
  );
}
