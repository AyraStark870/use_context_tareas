import React from "react";

export const TodoListItem = ({ x, handleDelete, handleToggle, index }) => {
  return (
    <div>
      {" "}
      <li key={x.id} className="list-group-item">
        <p
          onClick={() => handleToggle(x.id)}
          className={`${x.done && "complete"}`}
        >
          {" "}
          {index + 1}.{x.desc}
        </p>
        <button className="btn btn-danger" onClick={() => handleDelete(x.id)}>
          Borrar
        </button>
      </li>
    </div>
  );
};
