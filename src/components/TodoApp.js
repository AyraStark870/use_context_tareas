import React, { useReducer, useState, useEffect } from "react";
import { todoReducer } from "../todoReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleChange = ({ target }) => {
    setTarea({
      // ...tarea,
      [target.name]: target.value,
    });
  };

  const [tarea, setTarea] = useState({
    desc: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.desc.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: tarea.desc,
      done: false,
    };

    const action = { type: "add", payload: newTodo };
    dispatch(action);
    setTarea({ desc: "" });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <div>
      <h1>TodosApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((x, index) => (
              <li key={x.id} className="list-group-item">
                <p className="text-center">
                  {" "}
                  {index + 1}.{x.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(x.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>agregar TODO</h4>

          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="desc"
              placeholder="aprender ..."
              autoComplete="off"
              onChange={handleChange}
              value={tarea.desc}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1  w-100"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
