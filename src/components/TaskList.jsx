import TaskCard from "./TaskCard";
import {TaskContex} from '../context/TaskContex';
import { useContext } from "react";
function TaskList() {

const {tasks}= useContext(TaskContex)


  if (tasks.length === 0) {
    return <h1 className=" text-white text-4xl font-bold text-center">No hay tareas aun </h1>;
  }
  return (
    <div className="grid grid-cols-5 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
