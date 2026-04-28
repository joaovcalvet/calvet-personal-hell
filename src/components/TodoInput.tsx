import { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
    const [text, setText] = useState<string>("");

    function handleClick() {
        onAdd(text);
        setText("");
    }

    return (
        <div>
            <input
                type="text"
                name="todo-input"
                id="todo-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleClick}>Criar</button>
        </div>
    );
}

export default TodoInput;
