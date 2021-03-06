import React from "react";

const TodoList = ({ todos, setTodos,setEditTodo}) => {
    const onClickChange = (event) => {
        event.prevent.default()
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{...item,completed: !item.completed}
                }
            })
        )
    }
    const handleEdit = ({id}) => {
        const findtodo = todos.findtodo((todo) =>  todo.id === id);
        setEditTodo(findtodo)
    }
  return (
    <div>
      {todos.map((todo) => {
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed}? "completed : ""`}
            onChange={onClickChange}
          ></input>
          <div>
          <button className = "button-complete task-button" onClick = {() => handleComplete(todo)}>
          <i className = "fa fa-check-circle"></i>
          </button>
          <button className = "button-edit task-button" onClick = {() => handleEdit(todo)}>
          <i className = "fa fa-check-circle"></i>
          </button>
          <button className = "button-delete task-button" onClick = {() => handleDelete(todo)}>
          <i className = "fa fa-check-circle"></i>
          </button>
          
          </div>
        </li>
      })}
    </div>
  );
};

export default TodoList;