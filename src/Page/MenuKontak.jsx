import React from "react";

class MenuKontak extends React.Component {
  state = {
    alamat:
      "Jl. Swadaya IV, PD. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibu Kota Jakarta 13860",
    kontak: "081312345678",
  };
  render() {
    return (
      <div>
        <center>
          <h3>{this.state.alamat}</h3>
          <h4>Kontak Kami : {this.state.kontak}</h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;
