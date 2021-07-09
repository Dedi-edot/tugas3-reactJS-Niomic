import React from "react";
import "./App.css";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

export default App;
