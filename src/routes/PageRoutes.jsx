import React from "react";
import { Routes, Route } from "react-router-dom";

import Principal from "../pages/Principal";
import Search from "../pages/Search";
import Info from "../pages/Info";
import Movies from "../pages/Movies";
import Calendar from "../pages/Calendar";
import Series from "../pages/Series";
const PageRoutes = () => {
  return (
    <Routes>
      <Route index path="thaignflix/" element={<Principal />} />
      <Route index path="thaignflix/search" element={<Search />} />
      <Route index path="thaignflix/calendar" element={<Calendar />} />
      <Route index path="thaignflix/series" element={<Series />} />
      <Route index path="thaignflix/movies" element={<Movies />} />
      <Route index path="thaignflix/info" element={<Info />} />
    </Routes>
  );
};

export default PageRoutes;
