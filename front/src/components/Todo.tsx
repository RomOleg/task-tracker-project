import React from "react";
import { Card } from "react-bootstrap";
import { ITodo } from "../types/todo";
import { BaseSelect } from "./BaseSelect";
import { BaseSelectDate } from "./BaseSelectDate";
import "../styles/styles.css";
interface Props {
  todo: ITodo;
  onChangeTodo: (
    _id: string | undefined,
    durationTask?: string | null | undefined,
    status?: string | null | undefined
  ) => void;
}

const Todo: React.FC<Props> = ({ todo, onChangeTodo }) => {
  const checkTime: boolean = new Date(String(todo.durationTask)) >= new Date();
  const style: any = {};
  if (checkTime) style.background = "#FFF4F4";

  return (
    <Card className="time-over mt-3" style={style}>
      <Card.Body className="flex time-over">
        <p className="card-text">Author: {todo.author}</p>
        <Card.Title>{todo.name}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <div className="d-sm-flex justify-content-sm-between">
          <BaseSelect
            style={todo.status === "Выполнена" ? { background: "#91E0D6" } : {}}
            disabled={todo.status === "Выполнена" ? true : false}
            onChange={(status) => onChangeTodo(todo._id, todo.durationTask, status)}
            items={[
              String(todo.status),
              "Добавлена",
              "Выполняется",
              "Выполнена",
            ]}
            title={"Статус задачи"}
          />
          <div className="d-sm-flex">
            <BaseSelectDate
              disabled={todo.status === "Выполнена" ? true : false}
              onChange={(e) => onChangeTodo(todo._id, e.target.value, todo.status)}
              value={String(todo.durationTask)}
              title={"Срок выполнения"}
            />
            <BaseSelectDate
              disabled={true}
              value={String(todo.finishDate)}
              title={"Дата выполнения"}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Todo;
