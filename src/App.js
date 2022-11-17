
import './App.css';
import { useState } from 'react';
function App() {







  return (
    <div className="todo-list">
      <div className="Title"> Title </div>

      <input type="text" placeholder="Add Items" />
      <button>Add</button>
      <ListA />
    </div>
  )
}




//Component:list item
function ListA() {
  return (
    <div className="list">
      <li>Banana</li>
      <li>Mango</li>
      <li>Grave</li>
      <li>Grave</li>
      <li>Grave</li>
      <li>Grave</li>
      <li>Grave</li>
      <li>Grave</li>
      <li>Grave</li>

    </div>
  )
}
export default App;