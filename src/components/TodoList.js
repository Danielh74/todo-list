import { useState } from "react";
import './styles.css';

function TodoList() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [item, setItem] = useState({
        id: Math.floor((Math.random() * 100) + 1),
        text: "",
        completed: false,
    });

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
            setCount(count + 1);
        } else {
            newList[index].completed = false;
            setCount(count - 1);
        }
        setList(newList);
    }

    const handleDelete = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        setList(newList);
        setCount(count - 1)
    }

    return (
        <section className="vh-100 spectrum-background">
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-8 align-self-center">
                        <h1 className="text-center">To Do List</h1>
                        <div className="card">
                            <div className="card-body rounded-2 blur">
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
                                <ul className="list-group list-group-flush border-black blur">
                                    {list.map((todo, index) => (
                                        todo.completed ? <></> : <li className="list-group-item border-1 rounded mt-2" key={todo.id}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => handleClick(todo, index)}
                                                />
                                                {todo.completed ? <del>{todo.text}</del> : todo.text}
                                            </label>
                                            <i className="btn bi bi-trash3-fill" onClick={() => handleDelete(index)} ></i>
                                        </li>
                                    ))}
                                </ul>
                                <hr />
                                <div className="row ms-1">
                                    Completed:{"(" + count + "/" + list.length + ")"}
                                    <ul className="list-group list-group-flush border-black">
                                        {list.map((todo, index) => (
                                            todo.completed ? <li className="list-group-item border-1 rounded mt-2 bg-success-subtle" key={todo.id}>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        checked={todo.completed}
                                                        onChange={() => handleClick(todo, index)}
                                                    />
                                                    {todo.completed ? <del>{todo.text}</del> : todo.text}
                                                </label>
                                                <i className="btn bi bi-trash3-fill" onClick={() => handleDelete(index)} ></i>
                                            </li> : <></>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoList;