import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/todo";
import { connect } from "react-redux";
import { RootState } from "./store/store";
import {
  getTodo,
  updateTodo,
} from "./store/actions/todoActions";

interface Props {
  todo: ITodo[];
  updateTodo: (_id: string | undefined, durationTask?: string, status?: string) => void;
  getTodo: () => void;
}

export const App: React.FC<Props> = ({
  todo,
  getTodo,
  updateTodo
}) => {
  
  React.useEffect(() => {
    getTodo();
  }, []);


  const onChangeTodo = (
    _id: string | undefined, durationTask?: string, status?: string
  ) => {
    updateTodo(_id, durationTask, status);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        {todo ? (
          todo.map((td) => (
            <Todo key={td._id} todo={td} onChangeTodo={onChangeTodo} />
          ))
        ) : (
          <p>Нет задачь!</p>
        )}
      </Container>
    </div>
  );
};

const mapDispatchToProps = {
  getTodo,
  updateTodo,
};

const mapStateToProps = (state: RootState) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
