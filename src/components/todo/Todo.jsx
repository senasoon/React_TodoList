import React, { useState } from 'react';
import "./style.css";

function Todo(props) {
  if (props.todo.isDone === true){
    return (
      <div className='todo'>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.content}</p>
        <div className='buttons'>
          <button type="button" onClick={()=>{
            props.onDeleteHandler(props.todo.id)
          }}>삭제하기</button>
          <button type="button" onClick={()=>{
            props.onChangeHandler(props.todo.id)
          }}>취소</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='todo'>
        <h3>{props.todo.title}</h3>
        <p>{props.todo.content}</p>
        <div className='buttons'>
          <button type="button" onClick={()=>{
            props.onDeleteHandler(props.todo.id)
          }}>삭제하기</button>
          <button type="button" onClick={()=>{
            props.onChangeHandler(props.todo.id)
          }}>완료</button>
        </div>
      </div>
    )
  }
}

export default Todo