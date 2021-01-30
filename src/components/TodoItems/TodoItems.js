import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
    const items = props.items;
    const deleteItem = props.deleteItem;
    let length = items.length;
    const listItems = length ?(
        items.map(item => {
            return(
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>There is no item to show</p>
    )
    
    return (
        <div className="ListItems">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {listItems}
        </div>
    )
    }

export default TodoItems;