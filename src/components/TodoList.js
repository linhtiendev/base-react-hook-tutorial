import React, { useState } from "react";
import _ from "lodash";
const TodoList = () => {
  const [todo, setTodo] = useState("")
  const [ListTodo, setListTodo] = useState([
    { id: "todo1", name: "Watching youtube" },
    { id: "todo2", name: "Using FB" },
    { id: "todo3", name: "Reading book" },
  ]);

  const randomIntFromInterval=(min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClickBtn = () => {
    let todoId = randomIntFromInterval(4, 9999999999);
    let todoItem = {
      id: `todo${todoId}`, name: todo // string template
    }

    let currentTodoList = _.clone(ListTodo);
    currentTodoList.push(todoItem);
    setListTodo(currentTodoList);

    // setListTodo([...ListTodo, todoItem]); // toan tu (...) spread operator
  };
  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(ListTodo);
    currentTodoList = currentTodoList.filter(item => item.id !== id);
    // currentTodoList = currentTodoList.filter (item =>{
    //   if (item.id !== id) return item;
    // });
    setListTodo(currentTodoList);
  }
  return (
    <div>
      <label>TODO NAME: </label>
      <input value={todo} type="text" 
        onChange={(event) => setTodo(event.target.value)}/>
      <button type="submit" onClick={() => handleClickBtn()}>submit</button>
      <br />
      <div>----List todo----</div>
      {ListTodo.map((item, index) =>{
        return (
          <div id={item.id} key={item.id} onClick={()=> handleDeleteTodo(item.id)}> {item.name} </div>
        )
      })}
    </div>
  );
};
export default TodoList;
