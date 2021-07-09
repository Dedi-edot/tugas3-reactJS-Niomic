import React from "react";

class ListMakanan extends React.Component {
  state = {
    dataList: this.props.menu,
  };
  render() {
    return (
      <div>
        <img src={this.state.dataList} alt="Product Makanan" width="150" />
      </div>
    );
  }
}

export default ListMakanan;
