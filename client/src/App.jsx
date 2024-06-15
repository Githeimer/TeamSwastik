import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/ui/Navbar";
import Page404 from "./components/pages/Page404";
import Signin from "./components/ui/signin";
import Signup from "./components/ui/signup";
import Landing from "./components/pages/Landing";
import OrgLanding from "./components/pages/OrgLanding";
import Projects from "./components/ui/Card";
import Onecard from "./components/pages/cards/Onecard";
import Twocard from "./components/pages/cards/Twocard";
import Threecard from "./components/pages/cards/Threecard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/landing/user" element={<Landing></Landing>}></Route>\
          <Route
            path="/landing/org"
            element={<OrgLanding></OrgLanding>}
          ></Route>
          <Route path="/landing/cards" element={<Projects></Projects>}></Route>
          <Route
            path="/landing/cards/one"
            element={<Onecard></Onecard>}
          ></Route>
          <Route
            path="/landing/cards/two"
            element={<Twocard></Twocard>}
          ></Route>
          <Route
            path="/landing/cards/three"
            element={<Threecard></Threecard>}
          ></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
