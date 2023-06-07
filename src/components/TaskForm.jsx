import { useState, useContext } from "react";
import { TaskContex } from "../context/TaskContex";

function TaskForm() {
  // const {createTask} = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContex);

  const handleSubmit = (e) => {
    // console.log(title, description);
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle(""), setDescription("");
  };

  return (
    <div className=" max-w-md mx-auto flow-root p-3">
      <form onSubmit={handleSubmit} className="bg-slate-600 p-8 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2 text-center">
          Crea tu Tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="rounded-md bg-zinc-200 px-3 py-1 mb-2 float-right">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
