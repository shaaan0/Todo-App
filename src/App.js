import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


  //console.log(input);


  //when the app loads, we need to listen to the database and fetch new todos athey get added/removed.

  useEffect(() => {
    //this code gets fire once when the app load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().text)) // without todo it will return object but our setTodos takes string and put into array 
      // of data,so to fetch single item we take the exact same id that is being used while setting up our database.
    })
  }, []);


  const addTodo = (event) => {
    // this will fire off when we click that button
    event.preventDefault(); // will stop from loading the page
    db.collection('todos').add({
      text:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),              //servers timestamp
    })// fires a snapshot.
    
    setTodos([...todos, input]);

    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
        </FormControl>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
              Add to Do
          </Button>
      </form>

      <ul>
        {todos.map((todo,index) => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
