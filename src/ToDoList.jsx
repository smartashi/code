import React from "react";
const ToDoList=(props)=>{

      return  (<>
      <div className="todo-style">
      <p className="para" onClick={()=>{
        props.onSelect(props.id)
      }}>✕</p>
      <li>{props.text}</li>

      </div>

      </>
      );
};
export default ToDoList;