import React from 'react'

function TodoList({key, data, checked, onHandleDeleteTodo, onHandleCheckedTodo}) {
    return (
        <li
            key={key}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
            {/* Left-aligned text */}
            <span className={`text-blue-600  font-medium text-lg ${checked ? "line-through":"no-underline"}`}><p>{data}</p></span>
           
            {/* Right-aligned buttons */}
            <div className="flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors" onClick={()=>onHandleCheckedTodo(data)}>
                    Check
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors" onClick={() => onHandleDeleteTodo(data)} >
                    Delete
                </button>
            </div>
            
        </li>
    )
}

export default TodoList
