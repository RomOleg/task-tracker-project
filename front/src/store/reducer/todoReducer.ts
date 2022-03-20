import { ITodo } from '../../types/todo';
import { ADD_TODO, DEL_TODO, GET_TODO, UPDATE_TODO } from '../consts';
import { TodoActions } from '../types';

const initialState: ITodo[] = [
];

const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...action.payload, ...state];
    case DEL_TODO:
      return [...state.filter(todo => todo._id !== action.payload[0]._id)];
    case GET_TODO:
      return action.payload;
      case UPDATE_TODO:
        return [...state.map(todo => todo._id === action.payload[0]._id && action.payload[0])]
    default:
      return state;
  }
};

export default todoReducer;
