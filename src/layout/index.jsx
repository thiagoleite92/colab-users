import ModalCard from "@/pages/components/ModalCard";
import { Footer, Header } from "./components";
import Loading from "@/components/Loading";

export default function Layout({ children }) {
  return (
    <>
      <Loading />
      <ModalCard />
      <Header />
      <main
        className="
        flex
        justify-center
        items-center
        h-[540px]
        bg-slate-100
        border
        rounded-sm
        border-slate-400
        shadow-lg
        shadow-slate-400
        px-5
        py-2
        my-4
        overflow-y-auto
        max-lg:items-start
        max-sm:px-0
        max-sm:py-2
        "
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
