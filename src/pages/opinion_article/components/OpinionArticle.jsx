import { OPINION_ARTICLE_PAGE } from "../../../constants/pagesContents";

import curiosity from '../../../assets/curiosidad.png'
import colaboration from '../../../assets/colaboracion.png'
import imagination from '../../../assets/imaginacion.png'

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
              href="#references"
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
            <div className="flex gap-10 w-full">
              <div className="w-2/3 flex flex-col gap-4">
                <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_1}</p>
                <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_2}</p>
                <p>{OPINION_ARTICLE_PAGE.STEEP_1_PARAGRAF_3}</p>
              </div>

              <section
                className="w-1/3 my-1 flex justify-center items-center"
              >
                <div className="w-full lg:w-[95%] 2lg:w-[80%] 2xl:w-[50%] bg-stone-50 border border-sky-300 shadow-sm p-2">
                  <img src={curiosity} alt="image to steep 1" />
                  <p className="pl-1 pt-1 text-[12px]">
                    {`${OPINION_ARTICLE_PAGE.STEEP_1_IMAGE} `}
                    <a
                      className="underline text-blue-500"
                      href={OPINION_ARTICLE_PAGE.STEEP_1_LINK}
                      target="blank"
                    >
                      {`(${OPINION_ARTICLE_PAGE.STEEP_1_LINK})`}
                    </a>
                  </p>
                </div>
              </section>
            </div>
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
            

            <div className="flex gap-10 w-full">
              <div className="w-2/3 flex flex-col gap-6">
                <p>{OPINION_ARTICLE_PAGE.STEEP_3_PARAGRAF_1}</p>
                <p>{OPINION_ARTICLE_PAGE.STEEP_3_PARAGRAF_2}</p>
              </div>

              <section
                className="w-1/3 my-1 flex justify-center items-center"
              >
                <div className="w-full lg:w-[80%] 2lg:w-[70%] 2xl:w-[50%] bg-stone-50 border border-sky-300 shadow-sm p-2">
                  <img src={colaboration} alt="image to steep 3" />
                  <p className="pl-1 pt-1 text-[12px]">
                    {`${OPINION_ARTICLE_PAGE.STEEP_3_IMAGE} `}
                    <a
                      className="underline text-blue-500"
                      href={OPINION_ARTICLE_PAGE.STEEP_3_LINK}
                      target="blank"
                    >
                      {`(${OPINION_ARTICLE_PAGE.STEEP_3_LINK})`}
                    </a>
                  </p>
                </div>
              </section>
            </div>
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
            

            <div className="flex gap-10 w-full">
              <div className="w-2/3 flex flex-col gap-4">
                <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_1}</p>
                <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_2}</p>
                <p>{OPINION_ARTICLE_PAGE.STEEP_5_PARAGRAF_3}</p>
              </div>

              <section
                className="w-1/3 my-1 flex justify-center items-center"
              >
                <div className="w-full lg:w-[95%] 2lg:w-[80%] 2xl:w-[50%] bg-stone-50 border border-sky-300 shadow-sm p-2 overflow-hidden">
                  <img src={imagination} alt="image to steep 5" />
                  <p className="pl-1 pt-1 text-[12px]">
                    {`${OPINION_ARTICLE_PAGE.STEEP_5_IMAGE} `}
                    <a
                      className="underline text-blue-500"
                      href={OPINION_ARTICLE_PAGE.STEEP_5_LINK}
                      target="blank"
                    >
                      {`(${OPINION_ARTICLE_PAGE.STEEP_5_LINK})`}
                    </a>
                  </p>
                </div>
              </section>
            </div>
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

      <section id="references" className="mt-4">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {OPINION_ARTICLE_PAGE.REFERENCES_TITLE}
        </h2>

        <hr />
        <div className="flex flex-col gap-2 mt-6">
          <article className="mb-6">
            <p>
              {`${OPINION_ARTICLE_PAGE.REFERENCES_PARAGRAF_1} `}
              <a
                className="underline text-blue-500"
                href={OPINION_ARTICLE_PAGE.REFERENCES_LINK_1}
                target="blank"
              >
                {OPINION_ARTICLE_PAGE.REFERENCES_LINK_1}
              </a>
            </p>
          </article>

          <article className="mb-6">
            <p>
              {`${OPINION_ARTICLE_PAGE.REFERENCES_PARAGRAF_2} `}
              <a
                className="underline text-blue-500"
                href={OPINION_ARTICLE_PAGE.REFERENCES_LINK_2}
                target="blank"
              >
                {OPINION_ARTICLE_PAGE.REFERENCES_LINK_2}
              </a>
            </p>
          </article>

          <article className="mb-6">
            <p>
              {`${OPINION_ARTICLE_PAGE.REFERENCES_PARAGRAF_3} `}
              <a
                className="underline text-blue-500"
                href={OPINION_ARTICLE_PAGE.REFERENCES_LINK_3}
                target="blank"
              >
                {OPINION_ARTICLE_PAGE.REFERENCES_LINK_3}
              </a>
            </p>
          </article>

          <article className="mb-6">
            <p>
              {`${OPINION_ARTICLE_PAGE.REFERENCES_PARAGRAF_4} `}
              <a
                className="underline text-blue-500"
                href={OPINION_ARTICLE_PAGE.REFERENCES_LINK_4}
                target="blank"
              >
                {OPINION_ARTICLE_PAGE.REFERENCES_LINK_4}
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
