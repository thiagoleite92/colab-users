import ModalCard from "@/pages/components/ModalCard";
import { Footer, Header } from "./components";
import Loading from "@/components/Loading";
import { useQueryClient } from "react-query";

export default function Layout({ children }) {
  const queryClient = useQueryClient();

  return (
    <>
      <Loading />
      <ModalCard />
      <Header />
      <main
        className="
        flex
        justify-between
        items-center
        h-[560px]
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
        gap-5
        "
      >
        {children}
        <button onClick={() => queryClient.invalidateQueries("fetchModels")}>
          Buscar Modelos
        </button>
      </main>
      <Footer />
    </>
  );
}
