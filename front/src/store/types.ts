import { ITodo } from "../types/todo";

export interface TodoActions {
    type: string,
    payload: ITodo[],
}
