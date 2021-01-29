import React from 'react';
import './TodoItems.css';

const TodoItems = (props) => {
    const items = props.items;
    const deleteItem = props.deleteItem;
    const listItems = items.map(item => {
        return(
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
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