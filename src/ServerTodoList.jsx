import ClientTodoList from './ClientTodoList';

function ServerTodoList() {

    const initialTodos = [
        { id: 1, title: 'math', completed: false },
        { id: 2, title: 'Learn Python', completed: false },
        { id: 3, title: 'Build a Todo List', completed: false },
    ];

    return (
        <div>
            <h1>Todo List</h1>
            <ClientTodoList todos={initialTodos} />
        </div>
    );
}

export default ServerTodoList;