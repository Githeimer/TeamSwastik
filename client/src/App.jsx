import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/ui/Navbar";
import Page404 from "./components/pages/Page404";
import Signin from "./components/ui/signin";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signin></Signin>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
