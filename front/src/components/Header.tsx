import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { BaseSelect } from "./BaseSelect";

interface Props {}

export const Header: React.FC<Props> = () => {
  const [position, setPosition] = React.useState("top-start");

  const a = (e: any) => {
    setPosition(e.currentTarget.value);
    console.log(position, e.currentTarget.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="d-flex align-items-center">
          <Button variant="success me-3">Create Task</Button>
          <Navbar.Brand href="#">Sort by</Navbar.Brand>
          <BaseSelect items={['1', '2']} onChange={() => console.log('1211')} />
        </div>
        <Button variant="light">LogOut</Button>
      </Container>
    </Navbar>
  );
};
