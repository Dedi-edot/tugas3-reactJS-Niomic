import React from "react";
import Header from "./Header";
import "../Style/Kontak.css";

class Kontak extends React.Component {
  render() {
    return (
      <div id="kontak_bg">
        <Header />
        <div className="kontak">
          <h3>
            Jl. Swadaya IV, PD. Ranggon, Cipayung, Kota Jakarta Timur, Daerah
            Khusus Ibu Kota Jakarta 13860
          </h3>
          <p>081312345678</p>
        </div>
      </div>
    );
  }
}

export default Kontak;
