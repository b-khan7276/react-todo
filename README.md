

## React Todo-app 

 ### To Download react app   
    - $git clone https://github.com/b-khan7276/react-todo.git
    - $cd react-todo
    - $ npm install ( to install dependencies)
    - $ npm start (to start the app )


### Dependencies i have used
    - react bootstrap



### Steps of building app
    - create componets like
        Header.js
        Footer.js
        TodoItems.js
        Todo.js
    - Import add these files in to app.js




## Some concepts of react js

## props
    " props are used to pass data from parents components to child 
    components.
    - we can pass one than one values "
### Types of props
    - Proptypes:
      "  
        Header.proptypes ={
            title: Proptypes.string
            }
       " 
    - Defaultprops:
        "
        title:"Your title here"
        
        "
### useState || Hooks
    The React useState Hook allows us to track state in a function component.
- You can only use hooks inside a funtional components
- You can not use hooks in a class components
- You can not use hooks inside the if statements
- You can not use hooks in loops, it  can be nested

## How to use useState Hook:
- `const [count, setCount] = useState(4); `
- useState is consist of array which will have two values
# Different ways to use `usete`:
- Method 1:

```javascript

import React,{useState} from 'react';


export default function App() {
const [count, setCounter]= useState(0)

function dCount(){
  setCounter(prevaule=> prevaule -1);
}
function iCount(){
  setCounter(prevaule=> prevaule +1);
}
  return (
 <>
<button onClick={dCount}>-</button>
<span>{count}</span>
<button onClick={iCount}>+</button>

</>
  );
}

```

- Method 2:
```javascript


import React,{useState} from 'react';


function countInitial(){
  console.log('run function')
  return 4
}
export default function App() {
const [count, setCounter]= useState(()=> countInitial())

function dCount(){
  setCounter(prevaule=> prevaule -1);
}
function iCount(){
  setCounter(prevaule=> prevaule +1);
}
  return (
 <>
<button onClick={dCount}>-</button>
<span>{count}</span>
<button onClick={iCount}>+</button>

</>
  );
}


```
