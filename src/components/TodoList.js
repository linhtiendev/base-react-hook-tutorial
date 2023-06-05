import React, { useState } from 'react';

const TodoList = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <label>Name</label>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <br/>
            Xuat ra = {name} 
        </div>
    );
}

export default TodoList;