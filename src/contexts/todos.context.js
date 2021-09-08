import React, { createContext } from "react";
// all methods to interact with todos
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Faire la vaiselle", completed: false },
  { id: 1, task: "Sortir le chien", completed: false },
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
};
