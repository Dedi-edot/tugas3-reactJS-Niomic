import React from "react";
import TopEvents from "../Events/TopEvents";

const Footer = () => {
  return (
    // <div className="container">
    <div className="row">
      <div className="col-12 bg-light color-light text-center">
        <TopEvents />
        <h4>Footer</h4>
      </div>
    </div>
    // </div>
  );
};

// class Footer extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-12 bg-primary align-items-center">
//             <h2>Footer</h2>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Footer;
