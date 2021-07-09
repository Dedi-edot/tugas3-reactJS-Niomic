import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Tugas Niomic</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Kontak</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Tentang Kami</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand>Tugas Niomic</NavbarBrand>
//           <NavbarToggler />
//           <Collapse navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="#">Home</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">Product</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">Kontak</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="#">Tentang Kami</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

export default Header;
