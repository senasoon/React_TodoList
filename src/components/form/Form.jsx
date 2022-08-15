import React, { useState } from 'react';
import "./style.css";

function Form(props) {
  

  const titleText = (event) => {
    props.setTitle(event.target.value);
  }

  const contentText = (event) => {
    props.setContent(event.target.value);
  }


  return (
    <form className='form'>
      <div className='titleAndContent'>
        <p>제목</p>
        <input onChange={titleText} value={props.title} maxLength="10"></input>
        <p>내용</p>
        <input onChange={contentText} value={props.content} maxLength="40"></input>
      </div>
      <button onClick={props.onSubmitHandler} className='add' type="button">추가하기</button>
    </form>
  );
}

export default Form