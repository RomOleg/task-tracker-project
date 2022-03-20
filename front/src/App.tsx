import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/todo";
import { connect } from "react-redux";
import { RootState } from "./store/store";
import {
  getTodo,
  getTodoAuthor,
  getTodoDurationTask,
  getTodoFinishDate,
  getTodoStatus,
  updateTodo,
} from "./store/actions/todoActions";
interface Props {
  todo: ITodo[];
  getTodo: () => void;
  getTodoAuthor: (sort: string) => void;
  getTodoStatus: (sort: string) => void;
  getTodoDurationTask: (sort: string) => void;
  getTodoFinishDate: (sort: string) => void;
  updateTodo: (
    _id: string,
    durationTask?: string | null,
    status?: string | null
  ) => void;
}

export const App: React.FC<Props> = ({
  todo,
  getTodo,
  getTodoAuthor,
  getTodoStatus,
  getTodoDurationTask,
  getTodoFinishDate,
}) => {
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

  const sort = (sort: string) => {
    console.log(sort);

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
  };

  return (
    <div className="App">
      <Header onSort={sort} />
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
  getTodoAuthor,
  getTodoStatus,
  getTodoDurationTask,
  getTodoFinishDate,
};

const mapStateToProps = (state: RootState) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
