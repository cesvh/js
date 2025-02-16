import { useState } from 'react';

function TaskForm({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTask = (e) => {
        e.preventDefault();
        addTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleTask}>
            <input
                id="title"
                name="title"
                placeholder="Escribe la tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus />
            <br /><br />
            <input
                id="description"
                name="description"
                placeholder="Describe la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description} />
            <br /><br />
            <button>Guardar Tarea</button>
        </form>
    );
}

export default TaskForm;
