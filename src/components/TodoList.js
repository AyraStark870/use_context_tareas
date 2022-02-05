import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((x, index) => (
          <TodoListItem
            key={x.id}
            x={x}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};
