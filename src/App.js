import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItem/AddItem';
class App extends Component {
  state ={
    items: [
      {id:1, name:'hamza', age:24},
      {id:2, name:'bilal', age:23},
      {id:3, name:'ahmed', age:30}
    ]
  }
  render() {
    return (
      <div className="App">
         TodoList App
         <TodoItems />
         <AddItems />
      </div>
    );
  }
}

export default App;
