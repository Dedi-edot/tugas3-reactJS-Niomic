import React from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends React.Component {
  state = {
    pesanan: "",
    jmlPesan: 0,
    tampil: false,
  };

  handleAddKetik = (event) => {
    this.setState({ pesanan: event.target.value, tampil: true });
  };

  handleJmlPesan = (event) => {
    this.setState({ jmlPesan: event.target.value });
  };

  handleAdd = (value) => {
    this.setState({ pesanan: value, tampil: true });
  };
  handleBatal = () => {
    this.setState({ tampil: !this.state.tampil });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Daftar makanan yang kami sediakan</h3>
        <center>
          <td>
            <ListMakanan menu="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
            <button onClick={() => this.handleAdd("Nasi Padang")}>Pesan</button>
          </td>
          <td>
            <ListMakanan menu="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
            <button onClick={() => this.handleAdd("Sate")}>Pesan</button>
          </td>
          <td>
            <ListMakanan menu="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
            <button onClick={() => this.handleAdd("Soto")}>Pesan</button>
          </td>
          <td>
            <ListMakanan menu="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
            <button onClick={() => this.handleAdd("Nasi Uduk")}>Pesan</button>
          </td>
          <td>
            <ListMakanan menu="https://www.resepistimewa.com/wp-content/uploads/nasi-kuning.jpg" />
            <button onClick={() => this.handleAdd("Nasi Kuning")}>Pesan</button>
          </td>
          <br />
          <input
            type="text"
            placeholder="Makanan yang dipesan"
            onChange={this.handleAddKetik}
          />
          <input
            type="text"
            placeholder="Masukkan Jumlah Pesanan"
            onChange={this.handleJmlPesan}
          />
          <button onClick={this.handleBatal}>Batalkan Pesanan</button>
          <br />
          {this.state.tampil ? (
            <div>
              <strong>Pesanan Anda : {this.state.pesanan}</strong>
              <br />
              <strong>Jumlah Pesanan : {this.state.jmlPesan}</strong>
            </div>
          ) : null}
        </center>
      </div>
    );
  }
}

export default MenuMakanan;
