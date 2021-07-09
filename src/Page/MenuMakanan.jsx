import React from "react";
import FormMakanan from "../Form/FormMakanan";
import DaftarMakanan from "../Lib/DaftarMakanan";

const listmakanan = [
  {
    namaMakanan: "Nasi Padang",
    harga: 20000,
  },
  {
    namaMakanan: "Sate",
    harga: 20000,
  },
  {
    namaMakanan: "Soto",
    harga: 10000,
  },
  {
    namaMakanan: "Nasi Uduk",
    harga: 15000,
  },
  {
    namaMakanan: "Nasi Kuning",
    harga: 10000,
  },
  {
    namaMakanan: "Ayam Geprek",
    harga: 15000,
  },
  {
    namaMakanan: "Pecel Lele",
    harga: 20000,
  },
  {
    namaMakanan: "Pecel Ayam",
    harga: 25000,
  },
  {
    namaMakanan: "Mie Ayam",
    harga: 10000,
  },
];

class MenuMakanan extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Daftar makanan favorit</h3>
        <center>
          <table>
            <tbody>
              <tr>
                {DaftarMakanan.map((val, index) => {
                  return (
                    <td key={index}>
                      <img
                        src={val.img}
                        alt="Product Makanan"
                        width="150"
                        height="100"
                      />
                      <center>
                        <p>{val.namaMakanan}</p>
                        <p>Harga: Rp. {val.harga}</p>
                      </center>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
          <h4>List Makanan</h4>
          {listmakanan.map((makanan, index) => {
            return (
              <div key={index}>
                <p>
                  {index + 1}. {makanan.namaMakanan} | Harga: {makanan.harga}
                </p>
              </div>
            );
          })}
          <br />
          <FormMakanan />
        </center>
      </div>
    );
  }
}

export default MenuMakanan;
