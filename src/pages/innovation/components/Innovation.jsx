import { INNOVATION_PAGE } from "../../../constants/pagesContents";

export default function Innovation() {
  return (
    <main className="pl-8 pr-20 pb-8 flex flex-col gap-5">
      <section>
        <h1 className="font-serif text-3xl pt-5 pb-2 pl-1 pr-36">
          {INNOVATION_PAGE.MAIN_TITLE}
        </h1>

        <hr />
        <p className="mt-4">
          {INNOVATION_PAGE.MAIN_PARAGRAF}
        </p>
      </section>

      <section className="w-[330px] border border-sky-300 rounded-md px-5 py-4 shadow-md bg-stone-100">
        <h2 className="font-semibold">
          Sumario
        </h2>

        <ul className="text-sm text-blue-700 flex flex-col gap-1 mt-2">
          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#innovation-definition"
            >
              1. Definición
            </a>            
          </li>

          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#innovation-history"
            >
              2. Historia
            </a>
          </li>

          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#innovation-concepts"
            >
              3. Conceptos importantes relacionados
            </a>
          </li>

          <li>
            <a
              className="hover:underline hover:text-violet-700"
              href="#innovation-references"
            >
              4. Referencias bibliográficas
            </a>
          </li>
        </ul>
      </section>

      <section id="innovation-definition" className="mt-5">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {INNOVATION_PAGE.DEFINITION_TITLE}
        </h2>

        <hr />
        <p className="mt-6">{INNOVATION_PAGE.DEFINITION_PARAGRAF}</p>
      </section>

      <section id="innovation-history" className="mt-4">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {INNOVATION_PAGE.HISTORY_TITLE}
        </h2>

        <hr />
        <div className="flex flex-col gap-4 mt-6">
          <p>{INNOVATION_PAGE.HISTORY_PARAGRAF}</p>
        </div>

        <article className="mt-8 mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.HISTORY_SUBTITLE_1}
          </h3>
          <p>{INNOVATION_PAGE.HISTORY_SUBPARAGRAF_1}</p>
        </article>

        <article className="mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.HISTORY_SUBTITLE_2}
          </h3>
          <p>{INNOVATION_PAGE.HISTORY_SUBPARAGRAF_2}</p>
        </article>

        <article className="mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.HISTORY_SUBTITLE_3}
          </h3>
          <p>{INNOVATION_PAGE.HISTORY_SUBPARAGRAF_3}</p>
        </article>
      </section>

      <section id="innovation-concepts">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {INNOVATION_PAGE.IMPORTANT_CONCEPTS_TITLE}
        </h2>
        <hr />

        <article className="mt-8 mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.IMPORTANT_CONCEPTS_SUBTITLE_1}
          </h3>
          <p>{INNOVATION_PAGE.IMPORTANT_CONCEPTS_PARAGRAF_1}</p>
        </article>

        <article className="mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.IMPORTANT_CONCEPTS_SUBTITLE_2}
          </h3>
          <p>{INNOVATION_PAGE.IMPORTANT_CONCEPTS_PARAGRAF_2}</p>
        </article>

        <article className="mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.IMPORTANT_CONCEPTS_SUBTITLE_3}
          </h3>
          <p>{INNOVATION_PAGE.IMPORTANT_CONCEPTS_PARAGRAF_3}</p>
        </article>

        <article className="mb-6">
          <h3 className="font-serif font-semibold text-[16px] mb-4">
            {INNOVATION_PAGE.IMPORTANT_CONCEPTS_SUBTITLE_4}
          </h3>
          <p>{INNOVATION_PAGE.IMPORTANT_CONCEPTS_PARAGRAF_4}</p>
        </article>       
      </section>

      <section id="innovation-references" className="mt-4">
        <h2 className="font-serif text-2xl pt-5 pb-2 pl-1">
          {INNOVATION_PAGE.REFERENCES_TITLE}
        </h2>

        <hr />
        <div className="flex flex-col gap-2 mt-6">
          <article className="mb-6">
            <p>
              {`${INNOVATION_PAGE.REFERENCES_PARAGRAF_1} `}
              <a
                className="underline text-blue-500"
                href={INNOVATION_PAGE.REFERENCES_LINK_1}
                target="blank"
              >
                {INNOVATION_PAGE.REFERENCES_LINK_1}
              </a>
            </p>
          </article>

          <article className="mb-6">
            <p>
              {`${INNOVATION_PAGE.REFERENCES_PARAGRAF_2} `}
              <a
                className="underline text-blue-500"
                href={INNOVATION_PAGE.REFERENCES_LINK_2}
                target="blank"
              >
                {INNOVATION_PAGE.REFERENCES_LINK_2}
              </a>
            </p>
          </article>
        </div>
      </section>

    </main>
  )
}
