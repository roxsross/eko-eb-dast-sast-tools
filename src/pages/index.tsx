import { useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap";

export default function Index() {
  let var_secret= 'AKIASLEWQVB7RMDWZMVM'
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar color="light" light>
        <Container>
          <NavbarBrand tag="span">
            Training Days - Gitlab + Github + AWS
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://gitlab.com/training-days">
                Github
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div className="d-flex align-items-baseline py-5">
          Demostración GITHUB + AWS: {count}
          <Button
            className="ml-3"
            color="primary"
            onClick={() => setCount((count) => count + 1)}
            size="sm"
          >
            Increment
          </Button>
        </div>
      </Container>
    </>
  );
}
