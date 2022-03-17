import React from "react";
import { Card, Form } from "react-bootstrap";
import { ITodo } from "../types/todo";
import { BaseSelect } from "./BaseSelect";
import { BaseSelectDate } from "./BaseSelectDate";

interface Props {
  todo: ITodo;
}

export const ToDo: React.FC<Props> = ({ todo }) => {
  return (
    <Card>
      <Card.Body className="flex">
        <Card.Title>{todo.name}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Card.Body className="d-sm-flex justify-content-sm-between">
          <BaseSelect
            onChange={() => console.log("3")}
            items={["top-st11111art", "top-center"]}
            title={"Статус задачи"}
          />
          <div className="d-sm-flex">
            <BaseSelectDate
              onChange={() => console.log("1")}
              value={"2020-12-12"}
              title={"Срок выполнения"}
            />
            <BaseSelectDate
              onChange={() => console.log("2")}
              value={"2020-12-12"}
              title={"Дата выполнения"}
            />
          </div>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};
