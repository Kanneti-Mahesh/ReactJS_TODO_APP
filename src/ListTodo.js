import React,{useState,useEffect} from 'react';
import './App.css'


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaPlus,FaCheck,FaTrash } from "react-icons/fa";





const ListTodo = ({todolist,deleteHandler,selected})=>{



    return(
        <>
          <div><br/>
              {/*---------Display the list of tasks, including the task name, completion status, and an option to delete a task.--*/}
            {/*--Implement a feature to mark tasks as completed. Completed tasks should be visually differentiated from uncompleted tasks.--*/}
                    {todolist.map((todo,index)=>
                    <div key={todo.id}>
                       <Card body className={todo.status ? "bg w-60 text-left":"w-60 text-left"}> <span  id={todo.status ?'todo':null}>{todo.task }</span> <Button variant="danger" className='float-right' onClick={()=>{deleteHandler(todo.id)}} title='Delete'><FaTrash/></Button> <Button variant={todo.status ? "success":"secondary"} className='rounded-circle mr-3 float-right' onClick={()=>selected(todo.id)} title='Status'><FaCheck/></Button></Card>
                      
                    </div>
                    )}

           </div>
        </>
    )
}

export default ListTodo;