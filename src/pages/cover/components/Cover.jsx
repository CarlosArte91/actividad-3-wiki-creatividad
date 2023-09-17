export default function Cover() {
  return (
    <main className="px-6">
      <div className="border border-sky-300 rounded-md p-5 shadow-lg bg-stone-100">
        <h1 className="font-serif text-3xl mb-4">
          Te damos la bienvenida a Wikreative
        </h1>
        <h4>
          En Wikreative, exploramos los fascinantes mundos de la creatividad y la innovación. Este es un espacio dedicado a la expansión del conocimiento y la inspiración, donde te sumergirás en los conceptos más apasionantes y vitales que dan vida a la creatividad en todas sus formas.
        </h4>

        <section className="my-14">
          <h3 className="font-serif text-2xl mb-6">
            Creadores
          </h3>

          <ul className="flex flex-col gap-3">
            <li>
              Angel Javier Zabaleta Torrez
            </li>
            <li>
              Carlos Arturo Cruz Gutierrez
            </li>
            <li>
              Leindis Dik Monterroza Hernandez
            </li>
            <li>
              Santiago Ricardo Ramirez
            </li>
          </ul>
        </section>

        <section>
          <p className="text-sm text-slate-500">
            En Wikreative, valoramos y respetamos los derechos de autor de todos los autores y colaboradores que hacen posible este espacio de aprendizaje, y buscamos con esto fomentar la creatividad, la educación y el intercambio de conocimiento, siempre manteniendo un profundo respeto por los derechos intelectuales de quienes contribuyen a enriquecer este espacio. Si tienes preguntas o inquietudes relacionadas con los derechos de autor en Wikreative, no dudes en contactarnos.
          </p>
        </section>
      </div>
    </main>
  )
}
