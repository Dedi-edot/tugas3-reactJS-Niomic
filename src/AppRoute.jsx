import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact component={App} path="/" />
        <Route exact component={MenuMakanan} path="/menu-makanan" />
        <Route exact component={MenuMinuman} path="/menu-minuman" />
        <Route exact component={Kontak} path="/kontak" />
      </BrowserRouter>
      ;
    </>
  );
};

export default AppRoute;
