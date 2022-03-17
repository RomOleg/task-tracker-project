import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { ToDo } from "./components/Todo";
import { ITodo } from "./types/todo";

interface Props {}

export const App: React.FC<Props> = () => {
  const todo: ITodo[] = [
    {
      name: "Create task",
      description: "Todo todo",
      author: "Oleg",
      durationTask: new Date("2020-10-10"),
      finishDate: new Date("2020-10-11"),
      status: "Done",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Container>
        <ToDo todo={todo[0]} />
      </Container>
    </div>
  );
};

export default App;
