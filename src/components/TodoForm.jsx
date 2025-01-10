import React, { useState } from 'react'

function TodoForm({onAddTodo}) {

    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"", content:"", checked:false});
    }

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-wrap justify-center">
                    <input
                        type="text"
                        autoComplete="off"
                        // className="px-4 py-2 rounded-l-lg "
                         className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700 placeholder-gray-400"
                        value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                    <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-r-lg hover:bg-blue-600 transition-colors">Add Todo</button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm
