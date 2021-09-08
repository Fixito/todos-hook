import React, { createContext, useReducer } from "react";
// all methods to interact with todos
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Faire la vaiselle", completed: true },
  { id: 1, task: "Sortir le chien", completed: false },
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};
