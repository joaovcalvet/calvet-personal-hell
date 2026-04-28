import { useState } from "react";
import type { Todo } from "../App";

interface TodoItemProps {
    todo: Todo;
    onEdit: (id: number, newText: string) => void;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoItem({ todo, onEdit, onRemove, onToggle }: TodoItemProps) {
    const [editText, setEditText] = useState<string>(todo.text);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function handleSave() {
        if (editText.trim() === "") return;

        onEdit(todo.id, editText);

        setEditText("");
        setIsEditing(false);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />

                    <button onClick={handleSave}>Salvar</button>

                    <button onClick={() => setIsEditing(false)}>
                        Cancelar
                    </button>
                </div>
            ) : (
                <div>
                    <p>{todo.text}</p>

                    <div>
                        <button onClick={() => setIsEditing(true)}>
                            editar
                        </button>

                        <button onClick={() => onRemove(todo.id)}>
                            remover
                        </button>

                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodoItem;
