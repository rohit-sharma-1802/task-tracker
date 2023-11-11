import './App.css'
import React, {useState, useEffect} from 'react'

const App = () => {
  // Use states
  const [isComplete, setIsComplete] = useState(false);
  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState("")
  const [descr,setDescr] = useState("")
  const [completedTodos,setCompletedTodos] = useState([])
  const [priorityTodos,setPriorityTodos] = useState([])

  // Todos
  function createTodo(event) {  //create
    event.preventDefault()
    let newTodo = {
      tit: title,
      des: descr,
      prior: false
    }
    let newTodoArr = [...todos]
    newTodoArr.push(newTodo)
    localStorage.setItem('todoList',JSON.stringify(newTodoArr))
    setTitle("")
    setDescr("")
    setTodos(newTodoArr)
  }
  function deleteTodo(ind) {  //delete
    if (todos[ind].prior) {
      let todo = todos[ind]
      let indx = priorityTodos.findIndex(e => e===todo)
      deleteHighTodo(indx)
    }
    let reducedTodo = todos.filter((item,index) => index!==ind)
    localStorage.setItem('todoList',JSON.stringify(reducedTodo))
    setTodos(reducedTodo)
  }

  // Completed Todos
  function completeTodo(index) {  //complete
    let now = new Date()
    let dd = now.getDate()
    let mm = now.getMonth() +1
    let yyyy = now.getFullYear()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let completedOn = dd+'-'+mm+'-'+yyyy+' at '+h+':'+m+':'+s
    let filteredItem = {
      ...todos[index],
      completedOn: completedOn
    }
    let updatedCompletedArr = [...completedTodos]
    updatedCompletedArr.push(filteredItem)
    localStorage.setItem('completedTodos',JSON.stringify(updatedCompletedArr))
    deleteTodo(index)
    setCompletedTodos(updatedCompletedArr)
  }
  function deleteCompletedTodo(ind) { //delete
    let reducedTodo = completedTodos.filter((item,index) => index!==ind)
    localStorage.setItem('completedTodos',JSON.stringify(reducedTodo))
    setCompletedTodos(reducedTodo)
  }

  // Priority Todos
  function prioritize(index) {  //prioritize
    if (todos[index].prior) return
    todos[index].prior = true;
    localStorage.setItem('todoList',JSON.stringify(todos))
    let highTodos = [...priorityTodos, todos[index]]
    localStorage.setItem('priorityTodo',JSON.stringify(highTodos))
    setTodos(todos)
    setPriorityTodos(highTodos)
  }
  function completedHighTodo(ind) { //complete
    let todo = priorityTodos[ind]
    let index = todos.findIndex(e => e===todo)
    completeTodo(index)
  }
  function deleteHighTodo(ind) {  //delete
    let updatedHighTodos = priorityTodos.filter((item,index) => index!==ind)
    localStorage.setItem('priorityTodo',JSON.stringify(updatedHighTodos))
    setPriorityTodos(updatedHighTodos)
  }

  // Use effect for local storage retrieval
  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todoList'))
    if (savedTodo) {
      setTodos(savedTodo)
    }
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'))
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo)
    }
    let savedPriorityTodo = JSON.parse(localStorage.getItem('priorityTodo'))
    if (savedPriorityTodo) {
      setPriorityTodos(savedPriorityTodo)
    }
  },[])

  return (
    <div className="app">

      <div className="sidebar">
        <p><u>SignUp/LogIn</u></p>
        <h2>High Priority Tasks :</h2>
        <ul className="high-priority">
          {priorityTodos.map((item,index) => {
            return (<li key={index}>
              {item.tit}
              <button>View</button>
              <button onClick={()=>completedHighTodo(index)}>Done</button>
            </li>)
          })}
        </ul>
      </div>

      <div className="my-todos">
        <h1>My Todos</h1>
        <div className="todo-wrapper">

          <form className="todo-input" onSubmit={createTodo}>
            <div className="todo-input-item">
              <label>Title</label>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="What's the task title" />
            </div>
            <div className="todo-input-item">
              <label>Description</label>
              <input type="text" value={descr} onChange={(e)=>setDescr(e.target.value)} placeholder="What's the task description" />
            </div>
            <div className="todo-input-item" >
              <button type="submit" className="primaryBtn">Add</button>
            </div>
          </form>

          <div className="btn-area">
            <button 
              className={`secondaryBtn ${isComplete===false && 'active'}`}
              onClick={()=>setIsComplete(false)}
            >Todo</button>
            <button 
              className={`secondaryBtn ${isComplete===true && 'active'}`}
              onClick={()=>setIsComplete(true)}
            >Completed</button>
          </div>

          <div className="todo-list">
            {isComplete===false && todos.map((item,index)=>{
              return(
                <div className="todo-list-item" key={index}>
                  <h3>{item.tit}</h3>
                  <span className="todo-list-item-action">
                    <button onClick={()=>prioritize(index)}>Prioritize</button>
                    <button onClick={()=>deleteTodo(index)}>Delete</button>
                    <button>View</button>
                    <button onClick={()=>completeTodo(index)}>Done</button>
                  </span>
                </div>
              )
            })}
            {isComplete===true && completedTodos.map((item,index)=>{
              return(
                <div className="todo-list-item" key={index}>
                  <h3>{item.tit}</h3>
                  <p><small>Completed on: {item.completedOn}</small></p>
                  <span className="todo-list-item-action">
                    <button onClick={()=>deleteCompletedTodo(index)}>Delete</button>
                    <button>View</button>
                  </span>
                </div>
              )
            })}
          </div>

        </div>
      </div>

  </div>)
}

export default App
