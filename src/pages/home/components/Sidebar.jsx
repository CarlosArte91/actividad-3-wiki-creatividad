import Menu from "./Menu";

import logo from '../../../assets/wikreative.png';

export default function Sidebar() {
  return (
    <aside className="w-full h-full border-r border-r-sky-300">
      <section className="w-full flex justify-end pr-3">
        <img className="w-56" src={logo} alt="logo-wikcreative" />
      </section>

      <Menu />
    </aside>
  )
}
