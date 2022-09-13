import React, { useState } from "react";
import TareaForm from "./TareaForm";
import '../stylesheets/ListTareas.css'
import Tarea from "./Tarea";

function ListTareas() {

  const [tareas, setTareas] = useState([]);

  const addTarea = tarea => {
    tarea.text = tarea.text.trim();
    
    if (tarea.text) {
      const tareasUpdated = [tarea, ...tareas];
      setTareas(tareasUpdated);
    }
  };

  const deleteTarea = id => {
    const tareasUpdated = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasUpdated);
  };

  const finishTarea = id => {
    const tareasUpdated = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completed = !tarea.completed;
      }
      return tarea;
    });
    setTareas(tareasUpdated);
  };
  
  return (
    <>
      <TareaForm onSubmit={addTarea} />
      <div className='tareas-list-div'>
        {
          tareas.map((tarea) => 
            <Tarea
              key={tarea.id}
              id={tarea.id}
              text={tarea.text}
              completed={tarea.completed}
              deleteTarea={deleteTarea}
              finishTarea={finishTarea} />
          )
        }
      </div>

    </>
  );
}

export default ListTareas;