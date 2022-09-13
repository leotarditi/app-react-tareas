import React from "react";
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( { id, text, completed, finishTarea, deleteTarea } ) {
  return (
    <div className={completed ? 'tarea-div completed' : 'tarea-div'}>
      <div 
        className='tarea-text'
        onClick={() => finishTarea(id)}>
        {text}
      </div>
      <div 
        className='tarea-div-icons'
        onClick={() => deleteTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icon' />
      </div>
    </div>
  )
}

export default Tarea;