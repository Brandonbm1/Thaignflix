import React from "react";
import { Routes, Route } from "react-router-dom";

import Principal from "../pages/Principal";
import Search from "../pages/Search";
import Info from "../pages/Info";
import LastMovies from "../pages/LastMovies";
import Calendar from "../pages/Calendar";
import LastSeries from "../pages/LastSeries";
const PageRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Principal />} />
      <Route index path="/search" element={<Search />} />
      <Route index path="/calendar" element={<Calendar />} />
      <Route index path="/series" element={<LastSeries />} />
      <Route index path="/movies" element={<LastMovies />} />
      <Route index path="/info" element={<Info />} />
    </Routes>
  );
};

export default PageRoutes;
