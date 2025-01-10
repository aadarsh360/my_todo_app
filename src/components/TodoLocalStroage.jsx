const todoKey = "reactTodoLocal";

export const getLocalStroageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
}

export const setLocalStroageTodoData = (task)=>{
    return localStorage.setItem(todoKey, JSON.stringify(task));

}