
import React, { useState } from 'react';
import ListTodo from './ListTodo';
import logo from './logo.png'


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaPlus,FaCheck,FaTrash } from "react-icons/fa";






 function Todo(props){
 

//TODO LIST....
const [task,setTask] = useState("");
const [todo,setTodo] = useState([
    {id:1,task:"I woke up at 6'O clock",status:false}
]);


const changeHandler = e =>{
    setTask(e.target.value);
}



const submitHandler = async (e) =>{
    e.preventDefault();

    //It not allow Empty input/add todos...(simple validation)
    if(task!==""){
        let id=todo.length+1;
    const newTodos = {id:id,task:task,status:false}
    setTodo([...todo,newTodos]);

    localStorage.setItem('task',JSON.stringify([...todo,newTodos]));

    //RESET TODO INPUT...
    setTask("");
}

}


//DELETE OF TODOS...

const deleteHandler = (indexValue) =>{
    const newTodos = todo.filter((todo,index)=>todo.id!==indexValue);
    setTodo(newTodos);

}


//PROGRESS/STATUS OF TODOS...

const selected = (id) =>{
    let marked = todo.map(task=>{
        if(task.id===id){
            return ({...task,status:!task.status});
        }
        return task;
    })
    setTodo(marked)
    
}


    return (
        <>

            <div>
                <center>
                    <Card style={{ width: '40%',marginTop:'5%',height:'auto',boxShadow:'-2px 1px 5px gray',background:"#F2F2F2" }}>
                            <Card.Body>
                                <Card.Title><img src={logo} style={{width:'60px',height:'60px'}}/></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">React Todo List</Card.Subtitle>
                                <br/>
                                {/*-------Create a form that allows users to input a task and add it to the list.----*/}
                                <div>
                                <Form className="d-flex w-50" onSubmit={submitHandler}>
                                 <InputGroup>
                                    <Form.Control
                                    type="text"
                                    placeholder="Add Todo"
                                    className="me-2"
                                    name='task'
                                    value={task}
                                    onChange={changeHandler}
                                    required
                                    />
                                    <Button type='submit' variant="outline-primary"><FaPlus/></Button>
                                    </InputGroup>
                                </Form>


                                        <ListTodo todolist={todo}  deleteHandler={deleteHandler} selected={selected}/>  
                                </div>

                            </Card.Body>
                      </Card>
                </center>
            </div>
            
            
            </>  
    );
  }



export default Todo;
