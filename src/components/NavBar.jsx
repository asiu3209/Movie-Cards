// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <div className="navBar">
//       <div className="navbar-brand">
//         <Link to="/">Movie App</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//         <Link to="/Favorites" className="nav-link">
//           Favorites
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default NavBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
