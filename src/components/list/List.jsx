import React, { useState } from 'react';
import "./style.css";
import Todo from '../todo/Todo';

function List(props) {
  
  return (
    <div className='todo-list'>
      <h2 className='workingTitle'>W O R K I N G</h2>
      <div className='working box'>
        {props.todoList.map((todo) => {
          if (todo.id > 0 && todo.isDone===false){
            return <Todo todo={todo} key={todo.id} onDeleteHandler={props.onDeleteHandler} onChangeHandler={props.onChangeHandler}/>;
          } else {
            return null;
          }
        })}
      </div>
      <h2 className='doneTitle'>D O N E</h2>
      <div className='done box'>
        {props.todoList.map((todo) => {
            if (todo.id > 0 && todo.isDone){
              return <Todo todo={todo} key={todo.id} onDeleteHandler={props.onDeleteHandler} onChangeHandler={props.onChangeHandler}/>;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default List