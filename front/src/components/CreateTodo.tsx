import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { RootState } from "../store/store";
import { BaseSelect } from "./BaseSelect";
import { BaseSelectDate } from "./BaseSelectDate";
import { addTodo } from '../store/actions/todoActions';
import { ITodo } from "../types/todo";

interface Props {
  onHide: () => void,
  show: boolean,
  addTodo: (todo: ITodo[]) => void,
}

const CreateTodo: React.FC<Props> = ({ show, onHide, addTodo }) => {
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [author, setAuthor] = React.useState<string>("Oleg");
  const [durationTask, setDurationTask] = React.useState<string>('2022-10-10');

  const onCreateTask = () => {
    
    addTodo([
      {
        name,
        description,
        author,
        status: 'Добавлено',
        durationTask,
      }
    ]);
    onHide()
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Создание задачи
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Название задачи</p>
        <input
          className="textarea inputtext"
          type="text"
          placeholder="Произвольная строка"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Описание задачи</p>
        <textarea
          className="textarea"
          name=""
          id=""
          cols={30}
          rows={3}
          placeholder="Произвольная строка"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="d-flex align-items-center">
          <BaseSelect
            title="Автор"
            items={["Oleg", "Anna", "Boris"]}
            onChange={(author) => setAuthor(author)}
          />
          <BaseSelectDate
            onChange={(e) => setDurationTask(e.target.value)}
            value={durationTask}
            title={"Срок выполнения"}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onHide}>
          Discard
        </Button>
        <Button variant="success" onClick={onCreateTask}>
          CreateTask
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = {
  addTodo
};

const mapStateToProps = (state: RootState) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
