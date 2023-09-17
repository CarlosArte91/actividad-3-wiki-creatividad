import { useMainContext } from "../../../context/GeneralProvider"

import Routers from "../../../Routers"

export default function Home() {
  const { textHeader } = useMainContext();

  return (
    <main className="h-screen w-5/6 py-8 overflow-auto bg-stone-50">
      <section className="w-full bg-white">
        <section className="mb-8 flex gap-5">
          <div className="whitespace-nowrap py-1 text-sm font-semibold pl-5">{textHeader}</div>
          <div className="border-l border-b border-sky-300 w-full rounded-bl-md bg-stone-50"></div>
        </section>

        <Routers />
      </section>
    </main>
  )
}

// https://es.wiktionary.org/wiki/Wikcionario:Wiki#:~:text=Un%20wiki%20o%20WikiWiki%20(de,como%20usuario)%20en%20cualquier%20momento.

// https://es.wiktionary.org/wiki/Wikcionario:Portada
