import React from "react";

class ListMenuUtama extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Selamat Datang Di Warung Nusantara</h1>
        <center>
          <img src={this.props.gambar} alt="Masakan Nusantara" width="600" />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
