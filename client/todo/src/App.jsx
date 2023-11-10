import './App.css'
import React, {useState, useEffect} from 'react'

const App = () => {

  const [isComplete, setIsComplete] = useState(false);
  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState("")
  const [descr,setDescr] = useState("")
  const [completedTodos,setCompletedTodos] = useState([])

  function createTodo(event) {
    event.preventDefault()

    let newTodo = {
      tit: title,
      des: descr
    }

    let newTodoArr = [...todos]
    newTodoArr.push(newTodo)
    setTodos(newTodoArr)
    
    localStorage.setItem('todoList',JSON.stringify(newTodoArr))

    setTitle("")
    setDescr("")
  }

  function deleteTodo(ind) {
    let reducedTodo = todos.filter((item,index) => index!==ind)

    localStorage.setItem('todoList',JSON.stringify(reducedTodo))

    setTodos(reducedTodo)
  }

  function completeTodo(index) {
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
    setCompletedTodos(updatedCompletedArr)

    deleteTodo(index)
    localStorage.setItem('completedTodos',JSON.stringify(updatedCompletedArr))
  }

  function deleteCompletedTodo(ind) {
    let reducedTodo = completedTodos.filter((item,index) => index!==ind)

    localStorage.setItem('completedTodos',JSON.stringify(reducedTodo))

    setCompletedTodos(reducedTodo)
  }

  useEffect(()=>{

    let savedTodo = JSON.parse(localStorage.getItem('todoList'))
    if (savedTodo) {
      setTodos(savedTodo)
    }
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'))
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo)
    }
  },[])

  return (
    <div className="App">
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
  )
}

export default App
