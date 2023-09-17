import { Link } from "react-router-dom";
import { useMainContext } from "../../../context/GeneralProvider";
import { ROUT_PATHS } from "../../../constants/enums";

export default function Menu() {
  const { textHeader, handleChangeTextHeader } = useMainContext()

  return (
    <section className="pl-[20%] 2xl:pl-[30%] py-6">
      <nav>
        <ul className="text-sm text-blue-500 flex flex-col gap-2">
          <li
            className={`hover:underline hover:text-violet-700 w-fit ${textHeader === 'Portada' && 'text-violet-700 underline'}`}
            onClick={() => handleChangeTextHeader('Portada')}
          >
            <Link to={ROUT_PATHS.COVER}>
              Portada
            </Link>
          </li>

          <li
            className={`hover:underline hover:text-violet-700 w-fit ${textHeader === 'Aumentando la creatividad' && 'text-violet-700 underline'}`}
            onClick={() => handleChangeTextHeader('Aumentando la creatividad')}
          >
            <Link to={ROUT_PATHS.OPINION_ARTICLE}>
              Aumentando la creatividad
            </Link>
          </li>

          <li
            className={`hover:underline hover:text-violet-700 w-fit ${textHeader === 'Definición de creatividad' && 'text-violet-700 underline'}`}
            onClick={() => handleChangeTextHeader('¿Qué es la creatividad?')}
          >
            <Link to={ROUT_PATHS.CREATIVITY}>
              ¿Qué es la creatividad?
            </Link>
          </li>

          <li
            className={`hover:underline hover:text-violet-700 w-fit ${textHeader === 'Definición de innovación' && 'text-violet-700 underline'}`}
            onClick={() => handleChangeTextHeader('¿Qué es la innovación?')}
          >
            <Link to={ROUT_PATHS.INNOVATION}>
              ¿Qué es la innovación?
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
