import React, { createContext } from "react";
// all methods to interact with todos
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageStateReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Faire la vaiselle", completed: true },
  { id: 2, task: "Sortir le chien", completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useLocalStorageStateReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
