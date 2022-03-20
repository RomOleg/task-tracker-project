import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { sortList } from "../consts/consts";
import { BaseSelect } from "./BaseSelect";
import CreateTodo from './CreateTodo';

interface Props {
  onSort: (sort: string) => void
}

const Header: React.FC<Props> = ({ onSort }) => {
  const [modalShow, setModalShow] = React.useState<boolean>(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="d-flex align-items-center">
          <Button variant="success me-3"  onClick={() => setModalShow(true)}>Create Task</Button>
          <Navbar.Brand>Sort by</Navbar.Brand>
          <BaseSelect items={sortList} onChange={(sort) => onSort(sort)} />
        </div>
        <Button variant="light">LogOut</Button>
      </Container>
      <CreateTodo show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default Header;