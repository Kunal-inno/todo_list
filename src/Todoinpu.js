import React, { useEffect, useState } from 'react'
import './Todoinpu.css'
// import axios from "axios"

const Todoinpu = () => {


  const getlsdata =()=>{
    let list = localStorage.getItem("koko")
    console.log(list)

    if (list){
      return JSON.parse(localStorage.getItem("lists"))
    }else{
      return[]
    }
  }

    const[todo,settodo]=useState("")
    const[item,setitem]=useState([])

    const addtodo =()=>{
      setitem([...item, todo])
      settodo("")

    }

    const deleteitem = (id) =>{
      const updateditem = item.filter((elem,ind) =>{
        return ind !== id
      });
      setitem(updateditem)
    }


    useEffect (() => {
      localStorage.setItem("koko", JSON.stringify(item))

    },[item]);

  return (
    <>
    <h2>Add your todo here</h2>
    <div className='inpudiv'>
    <input className='inputarea' type="text" placeholder='Add your task' value={todo} onChange={(e)=>settodo(e.target.value)}  />
    <button  className='btntoadd' onClick={addtodo}>click to add in your TODO list</button>
    </div>
    {/* {todo} */}

    <div className='inpudiv'>

    <div >
      {
        item.map((elem,ind)=>{
          return (  <div key={ind}>
            <div>
            <h3>{elem}</h3>
            </div>
            <div>
            <button onClick={()=>deleteitem(ind)}>Delete</button>
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