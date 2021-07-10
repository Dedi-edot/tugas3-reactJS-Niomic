import React from "react";
import Header from "./Header";
import "../Style/Header.css";

class MenuHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <h1 style={{ textAlign: "center" }}>
          Selamat Datang Di Halaman Utama Masakan Nusantara
        </h1>
        <div className="image_header">
          <br />
        </div>
      </div>
    );
  }
}

export default MenuHome;
