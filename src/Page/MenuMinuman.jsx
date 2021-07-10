import React from "react";
import Header from "./Header";
import DaftarMinuman from "../Lib/DaftarMinuman";

class MenuMinuman extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Minuman Favorit</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {DaftarMinuman.map((minuman) => {
                return (
                  <td>
                    <center>
                      <img
                        src={minuman.img}
                        alt="Product Minuman"
                        width="150"
                        height="100"
                      />
                      <p>{minuman.namaMinuman}</p>
                      <p>Harga: Rp. {minuman.harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMinuman;
