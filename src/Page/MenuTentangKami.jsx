import React from "react";

class MenuTentangKami extends React.Component {
  state = {
    tentang:
      "Warung Nsantara adalah restoran yang bernuansa masakan nusantara, kami ada untuk membuat Anda menikmati makanan khas dari nusantara",
  };
  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami {this.state.tentang}</p>
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
