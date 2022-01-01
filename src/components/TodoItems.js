import React from 'react'
import { Button } from 'react-bootstrap'

export const TodoItems = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.tittle}</h4>
            <p>{todo.desc}</p>
            <Button variant="danger" size ="sm" onClick={()=>{onDelete(todo)}}  >Delete</Button> 

        </div>
    )
}
