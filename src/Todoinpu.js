import React, { useEffect, useState } from 'react'
import './Todoinpu.css'
// import axios from "axios"

const Todoinpu = () => {


  const getlsdata =()=>{
    let list = localStorage.getItem("koko")


    if (list){
      return JSON.parse(list);
    }else{
      return[];
    }
  }

    const[todo,settodo]=useState("")
    const[item,setitem]=useState(getlsdata())
    const [toggle,settoggle]=useState(true)
    const[isedititem,setisedititem]=useState(null)

    const addtodo =()=>{
      const allitem = {id: new Date().getTime().toString(), name:todo }
      setitem([...item, allitem])
      settodo("")

    }

    const deleteitem = (index) =>{
      const updateditem = item.filter((elem) =>{
        return index !== elem.id
      });
      setitem(updateditem)
    }
    const edititem = (id)=>{
      let newedititem = item.find((elem)=>{
        return elem.id === id
      })
      settoggle(false)
      settodo(newedititem.name)
      setisedititem(id)
    }


    useEffect (() => {
      localStorage.setItem("koko", JSON.stringify(item))

    },[item]);

  return (
    <>
    <h2>Add your todo here</h2>
    <div className='inpudiv'>
    <input className='inputarea' type="text" placeholder='Add your task'  pattern="[a-zA-Z]*" value={todo} required onChange={(e)=>settodo(e.target.value)}  />

    {
      toggle ? <button  className='btntoadd' onClick={addtodo}>click to add in your TODO list</button>:
      <button onClick={addtodo}>Edit</button>
    }
    // <button  className='btntoadd' onClick={addtodo}>click to add in your TODO list</button>
    </div>
    {/* {todo} */}

    <div className='inpudiv'>

    <div >
      {
        item.map((elem)=>{
          return (  <div key={elem.id}>
            <div>
            <h3>{elem.name}</h3>
            </div>
            <div className='editndel'>
            <button onClick={()=>deleteitem(elem.id)}>Delete</button>
            <button onClick={()=>edititem(elem.id)}>Edit</button>
            </div>
            </div>

          )
        })
      }
    
    </div>
    </div>
    </>
  )
}

export default Todoinpu