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

  /*deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({
      items : items
    })
  }*/
  deleteItem = (id) => {
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({
      items : items
    })
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items
    })
  }
  render() {
    return (
      <div className="App">
         TodoList App
         <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
         <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
