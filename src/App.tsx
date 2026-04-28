import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(text: string) {
        const todo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        setTodos([...todos, todo]);
    }

    function removeTodo(id: number) {
        setTodos(todos.filter((v) => v.id !== id));
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map((v) => {
                if (v.id === id) return { ...v, completed: !v.completed };
                return v;
            }),
        );
    }

    function editTodo(id: number, newText: string) {
        setTodos(
            todos.map((v) => {
                if (v.id === id) return { ...v, text: newText };
                return v;
            }),
        );
    }

    return (
        <div>
            <h1>Calvet's Personal Hell</h1>

            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onEdit={editTodo}
                        onRemove={removeTodo}
                    />
                ))}
            </div>

            <TodoInput onAdd={addTodo} />
        </div>
    );
}

export default App;
