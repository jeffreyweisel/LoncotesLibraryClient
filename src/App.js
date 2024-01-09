import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar color="info" expand="md">
        <Nav navbar>
          <NavbarBrand href="/">📖 Loncotes County Library</NavbarBrand>
          <NavItem>
            <NavLink href="/materials">Materials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/patrons">Patrons</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/checkouts">Checkouts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/browse">Browse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/overdue">Overdue Checkouts</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
