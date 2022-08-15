import React, { useState } from 'react';
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from '../list/List';
import userEvent from '@testing-library/user-event';


function Layout() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState([{id: 0, title: "", content: "", isDone: false}]);

  const onSubmitHandler = () => {
    setTodo([
      ...todo, {id:id,
      title:title,
      content:content,
      isDone:false}
    ]);

    setTitle("");
    setContent("");
    setId(id + 1);
  }

  const onDeleteHandler = (id) => {
    setTodo(
      todo.filter(todo=>{
        return todo.id !== id;
      })
    );
  }

  const onChangeHandler = (id) => {
    setTodo(
      todo.map(todo => {
        return todo.id === id ? {...todo, isDone:!todo.isDone} : todo;
      })
    );
  }

  return (
    <div className='layout'>
      <Header/>
      <Form title={title} setTitle={setTitle} content={content} setContent={setContent} id={id} setId={setId} todo={todo} setTodo={setTodo} onSubmitHandler={onSubmitHandler}/>
      <List todoList={todo} onDeleteHandler={onDeleteHandler} onChangeHandler={onChangeHandler}/>
    </div>
  );
}
export default Layout; 