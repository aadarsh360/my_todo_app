import React, { useState } from 'react'
import { use } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoDate from '../components/TodoDate';
import { getLocalStroageTodoData, setLocalStroageTodoData } from '../components/TodoLocalStroage';
import Footer from '../components/Footer';


function Todo() {

    const [task, setTask] = useState(() => getLocalStroageTodoData());

    // handleFormSubmit
    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue;

        // to check if the input field is empty or not
        if (!content) return;

        // to check if data is already existing or not
        // if (task.includes(inputValue)) { return; }
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
        if (ifTodoContentMatched) return;

        setTask((prevTask) => ([...prevTask, { id, content, checked }]));

    }

    // Todo add data to localstroage
    setLocalStroageTodoData(task);

    // handleDelete
    const handleDeleteTodo = (value) => {

        const updateTask = task.filter((currentEle) => currentEle.content !== value);
        setTask(updateTask);
    }

    // handleChecked Todo
    const handleCheckedTodo = (value) => {

        const updateTask = task.map((currTask) => {
            if (currTask.content === value) {
                return { ...currTask, checked: !currTask.checked }
            }
            else {
                return currTask;
            }
        })
        setTask(updateTask);
    }

    // handleDeleteAll Todo
    const handleDeleteAllTodo = () => {
        setTask([]);
    }


    return (
        <>
            <div className="flex justify-center min-h-screen bg-gray-800">

                <section className="">

                    <h1 className="text-4xl font-bold p-4 mt-4 text-white flex justify-center" >Todo App</h1>
                    <TodoDate />

                    <TodoForm onAddTodo={handleFormSubmit} />

                    <section className={`p-4 ${task.length !==0 ? "rounded-lg shadow-md":""} max-w-lg mx-auto mt-8`}>
                        <ul className="space-y-3">
                            {task.map((currentElement, index) => (
                                <TodoList
                                    key={currentElement.id}
                                    data={currentElement.content}
                                    checked={currentElement.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={handleCheckedTodo}
                                />
                            ))}
                        </ul>

                    </section>

                    <section className="flex justify-center">
                        {task.length !== 0 &&
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors" onClick={handleDeleteAllTodo}>Clear All</button>
                        }
                    </section>

                </section>
            </div>
        </>

    )
}

export default Todo
