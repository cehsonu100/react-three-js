import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoMatch from "../components/NoMatch";
import HelloWorld from "../components/HelloWorld";
import Home from "../containers/Home";
import Three3DModelsContainer from "../containers/Three3DModelsContainer/Three3DModelsContainer";

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Three3DModelsContainer />}/>
      <Route path="/helloworld" element={<HelloWorld />}/>
      <Route path='*' element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
