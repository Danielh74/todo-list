import { useState } from "react";
import './styles.css';

function TodoList() {
    const [item, setItem] = useState({
        id: Math.floor((Math.random() * 100) + 1),
        text: "",
        completed: false,
    });
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.text.trim())
            return;
        setList([...list, item]);
        setItem({
            id: Math.floor((Math.random() * 100) + 1),
            text: "",
            completed: false,
        });
    }

    const handleClick = (todo, index) => {
        let newList = [...list];
        if (todo.completed === false) {
            newList[index].completed = true;
        } else {
            newList[index].completed = false;
        }
        setList(newList);
    }

    const handleDelete = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <section className="vh-100">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h1 className="text-center">To Do List</h1>
                        <div className="card">
                            <div className="card-body">
                                <form className="input-group" onSubmit={handleSubmit}>
                                    <input
                                        className="form-control rounded-start-3 m-0"
                                        type="text"
                                        placeholder="Item"
                                        value={item.text}
                                        onChange={(e) => setItem({ ...item, text: e.target.value })}
                                    />
                                    <button type="submit" className="btn btn-primary form-button mt-0">Add</button>
                                </form>
                                <ul className="list-group list-group-flush border-black">
                                    {list.map((todo, index) => (
                                        <li className="list-group-item" key={todo.id}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => handleClick(todo, index)}
                                                />
                                                {todo.completed ? <del>{todo.text}</del> : todo.text}
                                            </label>
                                            <button className="btn btn-secondary" onClick={() => handleDelete(index)}>x</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoList;