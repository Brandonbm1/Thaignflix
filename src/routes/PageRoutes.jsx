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
      <Route index path="/" element={<Principal />} />
      <Route index path="/search" element={<Search />} />
      <Route index path="/calendar" element={<Calendar />} />
      <Route index path="/series" element={<Series />} />
      <Route index path="/movies" element={<Movies />} />
      <Route index path="/info" element={<Info />} />
    </Routes>
  );
};

export default PageRoutes;
