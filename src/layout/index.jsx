import { Footer, Header } from './components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className="
        mt-4 
        flex 
        justify-center 
        items-center
        h-[520px]
        mx-10
        bg-slate-100
        border
        rounded-sm
        border-slate-400
        shadow-lg
        shadow-slate-400
        "
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
