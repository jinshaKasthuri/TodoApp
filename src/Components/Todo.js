import React, { useState,useRef,useEffect } from 'react'
import './Todo.css'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
function Todo() {

const [newitem,setnewitem]=useState("")
const [todos,settodos]=useState([])
const [editid,seteditid]=useState(0)


const handleSubmit =(e)=>{
  e.preventDefault()
}

const addTodo=()=>{
  settodos([...todos,{list :newitem ,id : Date.now()}])
  console.log(todos);
  setnewitem('')
}

const inputref=useRef('null')

useEffect(()=>{
  inputref.current.focus()
})

const ondelete=(id)=>{
  settodos(todos.filter((data)=>data.id!==id))
}

const onEdit= (id)=>{
  const edittodo =todos.find((data)=>data.id==id)
  setnewitem(edittodo.list)
  seteditid(edittodo.id)
}


  return (
    <div className='container'>
      <h2>TODO APP</h2>
      <form className='form-grouop' onSubmit={handleSubmit}>
      <input type='text'  className="h2" value={newitem} ref={inputref} placeholder="Enter your todo"  onChange={(e)=>setnewitem(e.target.value)}/>
      <button onClick={addTodo}>{editid ?'EDIT': 'ADD'}</button>
      </form>
      <div>
        <ul>
            {
              todos.map((data)=>(
              <li className='list-items'>
                <div className='list-item-list'>{data.list}</div>
              <span>
                <AiFillDelete className="list-item-icons" id='delete'  title='Delete'
                onClick={()=>ondelete(data.id)}
                
                />


                <AiFillEdit className="list-item-icons" id='edit' title='Edit'
                onClick={()=> onEdit(data.id)}
                
                />

                </span></li>
              ))
            }
            
        </ul>
      </div>
    </div>
  )
}

export default Todo
