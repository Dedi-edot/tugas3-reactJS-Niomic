import React from "react";
import ListMenuUtama from "../ListData/ListMenuUtama";

class MenuUtama extends React.Component {
  render() {
    return (
      <div>
        <ListMenuUtama gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
      </div>
    );
  }
}

export default MenuUtama;
