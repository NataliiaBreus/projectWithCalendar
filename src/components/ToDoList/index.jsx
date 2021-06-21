import React, { useState } from 'react';
import style from "./ToDoList.module.sass";

function ToDoList () {
const [task, setTask] = useState("");
const [tasklist, setTaskList] = useState([]);

const handleChange = (event) => {
  setTask (event.target.value);
};

const AddTask = () => {
if (task !== "") {
  const taskDetails = {
    id: Math.floor(Math.random()*10000), 
    value: task,
    isCompleted: false,
  }
  setTaskList([...tasklist, taskDetails]);
}
};

 const deletetask = (event, id) => {
   event.preventDefault();
   setTaskList(tasklist.filter((task) =>task.id != id));
 };

 const taskCompleted = (event, id) =>{
   event.preventDefault ();
   const element = tasklist.findIndex((elem) => elem.id == id);
   const newTaskList = [...tasklist];
   newTaskList[element] = {
     ...newTaskList[element],
     isCompleted: true,
   };

   setTaskList(newTaskList);
 };

  return (<div className={style.todo}>
    <h1 className={style.title}>TODO LIST</h1>
    <div className={style.inputWrapper}>
    <input className={style.input}
    type = "text" 
    name="text" 
    id = "text"
    onChange = {
      (event)=> handleChange(event)
    }
    placeholder = "Add task here" />
    <button className={style.addBtn} onClick = {AddTask}>
      Add
      </button>
      <br />
    </div>
     
      {tasklist !== [] ? (
        <ul className={style.ul}>
          {tasklist.map((task) =>(
            <li className = {task.isCompleted ? style.crossText : style.listItem}>{task.value}
            <button className={style.completedBtn} onClick = {(event) =>taskCompleted(event, task.id)}>Completed</button>
            <button className={style.deleteBtn} onClick = {(event) =>deletetask(event, task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ):null}
  </div>
  );
}

export default ToDoList;