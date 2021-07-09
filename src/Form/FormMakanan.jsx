import React from "react";

class FormMakanan extends React.Component {
  state = {
    pesanan: "",
    jumlah: 0,
  };

  handleChange = (e) => {
    this.setState({ pesanan: e.target.value });
  };

  handleChangeJumlah = (e) => {
    this.setState({ jumlah: e.target.value });
  };

  handleSubmit = () => {
    alert(
      "Pesanan Anda adalah: " +
        this.state.pesanan +
        " |  Jumlah pesanan: " +
        this.state.jumlah
    );
    this.setState({ pesanan: "", jumlah: "" });
  };

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.handleChange(e)}
              type="text"
              value={this.state.pesanan}
              placeholder="Masukan pesanan Anda"
            />
            <input
              onChange={this.handleChangeJumlah}
              type="number"
              value={this.state.jumlah}
              placeholder="Masukan jumlah pesanan"
            />
            <br /> <br />
            <input type="submit" value="Pesan" />
          </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
