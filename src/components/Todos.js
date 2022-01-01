import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {

    let myStyle={
        minHeight:"50vh"
    }
    return (
        <div className="container" style={myStyle} >
            <h3 className="text-center my-3"> Todo list</h3>
            {props.todos.length ===0? "No todo to display": 
            props.todos.map((todo)=>{
                return   <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              
           
            
            })
            }
          
        </div>
    )
}
