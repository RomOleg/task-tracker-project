import { AppDispatch } from "./../../../../../debtfriends/src/store/store";
import { ADD_TODO, DEL_TODO, GET_TODO, UPDATE_TODO } from "../consts";
import { ITodo } from "../../types/todo";
import { TodoActions } from "../types";
import Axios from "../../axios/axios";

export const addTodo = (todo: ITodo[]) => {
  try {
    return async (dispatch: AppDispatch) => {
      const resAddTodo = await Axios.post<ITodo>("api/todo", {
        ...todo[0],
      });
      dispatch<TodoActions>({
        type: ADD_TODO,
        payload: [resAddTodo.data],
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const delTodo = async (todo: ITodo[]) => {
  try {
    const resDelTodo = await Axios.delete(`api/todo/${todo[0]._id}`);
    return {
      type: DEL_TODO,
      payload: todo,
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async(_id: string | undefined, durationTask?: string | null, status?: string | null) => {
    try {
    //   return async (dispatch: AppDispatch) => {
        const todo = await Axios.put<ITodo>(`api/todo/${_id}?status=${status}&durationTask=${durationTask}`);
        // dispatch<TodoActions>({
        //   type: UPDATE_TODO,
        //   payload: [todo.data],
        // });
    //   };
    } catch (error) {
      console.log(error);
    }
  };

interface AxiosInstanceTodo {
  docs: [ITodo];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export const getTodo = () => {
  return async (dispatch: AppDispatch) => {
    const todo = await Axios.get<AxiosInstanceTodo>("api/todo");
    dispatch<TodoActions>({ type: GET_TODO, payload: todo.data.docs });
  };
};
