import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        {todos.map((todo, i) => (
          <List key={uuid()}>
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          </List>
        ))}
      </Paper>
    );

  return null;
};

export default TodoList;
