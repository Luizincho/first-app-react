import { useContext } from 'react';
import {TaskContex} from '../context/TaskContex';
import moduleName from 'module';

function TaskCard({ task}) {
const {deleteTask }= useContext(TaskContex)


  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'> {task.description}</p>
      <button className='bg-cyan-400 rounded-md text-sm px-2 py-1 mt-4 hover:bg-cyan-700' onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
