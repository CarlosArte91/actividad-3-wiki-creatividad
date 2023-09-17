import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralProvider";

import Home from "./pages/home/components/Home";
import Sidebar from "./pages/home/components/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <GeneralProvider>
        <main className="h-full w-full flex">
          <section className="bg-stone-50 w-1/6 min-w-[250px] py-8 sticky">
            <Sidebar />
          </section>

          <Home />
        </main>
      </GeneralProvider>
    </BrowserRouter>
  )
}
