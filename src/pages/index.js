import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify([]));
    router.replace("/modelos");
  }, [router]);

  return null;
}
