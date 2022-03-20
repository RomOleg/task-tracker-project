import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/todo";
import { connect } from "react-redux";
import { RootState } from "./store/store";
import { getTodo, updateTodo } from "./store/actions/todoActions";
interface Props {
  todo: ITodo[];
  getTodo: () => void;
  updateTodo: (_id: string, durationTask?: string | null, status?: string | null) => void;
}

export const App: React.FC<Props> = ({ todo, getTodo }) => {
  React.useEffect(() => {
    getTodo();
  }, []);

  const onChangeTodo = (
    _id: string | undefined,
    durationTask?: string | null,
    status?: string | null
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
