import { Footer, Header } from './components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className="
        flex
        justify-evenly
        items-center
        h-[540px]
        bg-slate-100
        border
        rounded-sm
        border-slate-400
        shadow-lg
        shadow-slate-400
        py-10
        px-5
        my-4
        mx-5
        overflow-y-auto
        max-lg:items-start
        "
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
