import { OPINION_ARTICLE_PAGE } from "../../../constants/pagesContents";

export default function OpinionArticle() {
  return (
    <main className="pl-8 pr-20 pb-8 flex flex-col gap-5">
      <section>
        <h1 className="font-serif text-3xl pt-5 pb-2 pl-1 pr-36">
          {OPINION_ARTICLE_PAGE.MAIN_TITLE}
        </h1>

        <hr />
        <p className="mt-4">
          {OPINION_ARTICLE_PAGE.MAIN_PARAGRAF}
        </p>
      </section>

      <section className="w-[430px] border border-sky-300 rounded-md px-5 py-4 shadow-md bg-stone-100">
        <h2 className="font-semibold">
          Sumario
        </h2>

        <ul className="text-sm text-blue-700 flex flex-col gap-1 mt-2">
          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#steps-creativity"
            >
              1. Pasos para Aumentar la Creatividad
            </a>
            <ul className="text-sm flex flex-col gap-1 mt-2">
              <li>
                <a className="ml-5 hover:underline hover:text-violet-700" href="#steep-1">
                  1. Fomenta la curiosidad y la diversidad de experiencias
                </a>
              </li>
              <li>
                <a className="ml-5 hover:underline hover:text-violet-700" href="#steep-2">
                  2. Rompe con la rutina
                </a>
              </li>
              <li>
                <a className="ml-5 hover:underline hover:text-violet-700" href="#steep-3">
                  3. Estimula la colaboración y la diversidad de perspectivas
                </a>
              </li>
              <li>
                <a className="ml-5 hover:underline hover:text-violet-700" href="#steep-4">
                  4. Practica la observación y el pensamiento crítico
                </a>
              </li>
              <li>
                <a className="ml-5 hover:underline hover:text-violet-700" href="#steep-5">
                  5. Dedica tiempo a la reflexión y la imaginación
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#conclutions"
            >
              2. Conclusiones
            </a>
          </li>

          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#external-links"
            >
              3. Referencias bibliográficas
            </a>
          </li>
        </ul>
      </section>

      <section id="steps-creativity">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {OPINION_ARTICLE_PAGE.STEEP_CREATIVITY_TITLE}
        </h2>
        <hr />

        <article id="steep-1" className="mt-8 mb-10">
          <h3 className="font-serif text-xl mb-4">
            {OPINION_ARTICLE_PAGE.STEEP_1_TITLE}
          </h3>
          <div className="flex flex-col gap-4">
            <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_1}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_2}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_3}</p>
          </div>
        </article>

        <article id="steep-2" className="mt-8 mb-10">
          <h3 className="font-serif text-xl mb-4">
            {OPINION_ARTICLE_PAGE.STEEP_2_TITLE}
          </h3>
          <div className="flex flex-col gap-4">
            <p>{OPINION_ARTICLE_PAGE.STEEP_2_PARAGRAF_1}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_2_PARAGRAF_2}</p>
          </div>
        </article>

        <article id="steep-3" className="mt-8 mb-10">
          <h3 className="font-serif text-xl mb-4">
            {OPINION_ARTICLE_PAGE.STEEP_3_TITLE}
          </h3>
          <div className="flex flex-col gap-4">
            <p>{OPINION_ARTICLE_PAGE.STEEP_3_PARAGRAF_1}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_3_PARAGRAF_2}</p>
          </div>
        </article>

        <article id="steep-4" className="mt-8 mb-10">
          <h3 className="font-serif text-xl mb-4">
            {OPINION_ARTICLE_PAGE.STEEP_4_TITLE}
          </h3>
          <div className="flex flex-col gap-4">
            <p>{OPINION_ARTICLE_PAGE.STEEP_4_PARAGRAF_1}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_4_PARAGRAF_2}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_4_PARAGRAF_3}</p>
          </div>
        </article>

        <article id="steep-5" className="mt-8">
          <h3 className="font-serif text-xl mb-4">
            {OPINION_ARTICLE_PAGE.STEEP_5_TITLE}
          </h3>
          <div className="flex flex-col gap-4">
            <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_1}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_2}</p>
            <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_3}</p>
          </div>
        </article>
      </section>

      <section id="conclutions" className="mt-5">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {OPINION_ARTICLE_PAGE.CONCLUTIONS_TITLE}
        </h2>

        <hr />
        <div className="flex flex-col gap-4 mt-6">
          <p>{OPINION_ARTICLE_PAGE.CONCLUTIONS_PARAGRAF_1}</p>
          <p>{OPINION_ARTICLE_PAGE.CONCLUTIONS_PARAGRAF_2}</p>
          <p>{OPINION_ARTICLE_PAGE.CONCLUTIONS_PARAGRAF_3}</p>
        </div>
      </section>
    </main>
  )
}
