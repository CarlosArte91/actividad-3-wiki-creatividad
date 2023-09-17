import { Navigate, Route, Routes } from "react-router-dom";
import { ROUT_PATHS } from "./constants/enums";

import Cover from "./pages/cover/components/Cover";
import OpinionArticle from "./pages/opinion_article/components/OpinionArticle";
import Creativity from "./pages/creativity/components/Creativity";
import Innovation from "./pages/innovation/components/Innovation";

export default function Routers() {
  return (
    <Routes>
      <Route path={ROUT_PATHS.HOME} element={<Navigate to={ROUT_PATHS.OPINION_ARTICLE} />} />
      <Route path={ROUT_PATHS.COVER} element={<Cover />} />
      <Route path={ROUT_PATHS.OPINION_ARTICLE} element={<OpinionArticle />} />
      <Route path={ROUT_PATHS.CREATIVITY} element={<Creativity />} />
      <Route path={ROUT_PATHS.INNOVATION} element={<Innovation />} />
    </Routes>
  )
}
