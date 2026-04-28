import { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState<string>("");

    function handleCreate() {
        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") handleCreate();
    }

    return (
        <div>
            <input
                type="text"
                name="todo-input"
                id="todo-input"
                value={text}
                onKeyDown={handleKeyDown}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleCreate}>Criar</button>
        </div>
    );
}

export default TodoInput;
