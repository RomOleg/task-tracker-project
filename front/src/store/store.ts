import { Action, applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        // logger,
        thunk,
    ),
))

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;