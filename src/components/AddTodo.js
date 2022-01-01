import React from 'react'
import { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
        <div className='container'>
            <h3>Add a todo</h3>
    <Form onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add your title here." />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3"  controlId="formBasicPassword">
    <Form.Label>Describtion</Form.Label>
    <Form.Control value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="describtion" />
  </Form.Group>
  

  <Button variant="primary" size="sm" type="submit">
Add todo 
  </Button>
</Form>
</div> </>
    )
}
