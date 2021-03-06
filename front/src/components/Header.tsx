import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { sortList } from "../consts/consts";
import { BaseSelect } from "./BaseSelect";
import CreateTodo from './CreateTodo';
import { getTodoAuthor, getTodoDurationTask, getTodoFinishDate, getTodoStatus } from '../store/actions/todoActions'

interface Props {
  getTodoAuthor: (author: string) => void,
  getTodoStatus: (status: string) => void,
  getTodoDurationTask: (durationTask: string) => void,
  getTodoFinishDate: (finishDate: string) => void,
}

const Header: React.FC<Props> = ({ getTodoAuthor, getTodoDurationTask, getTodoFinishDate, getTodoStatus }) => {
  const [modalShow, setModalShow] = React.useState<boolean>(false);

  const onSort = (sort: string) => {
    switch (sort) {
      case "author":
        getTodoAuthor(sort);
        break;

      case "status":
        getTodoStatus(sort);
        break;

      case "durationTask":
        getTodoDurationTask(sort);
        break;

      case "finishDate":
        getTodoFinishDate(sort);
        break;

      default:
        break;
    }
  }

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

const mapDispatchToProps = {
  getTodoAuthor,
  getTodoStatus,
  getTodoDurationTask,
  getTodoFinishDate,
};

export default connect(null, mapDispatchToProps)(Header);