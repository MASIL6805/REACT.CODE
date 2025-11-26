import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
    let [todos, setTodos] = useState([{task:"sample task", id: uuidv4(), isdone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addTodo = () => {
       // setTodos([...todos, {task: newTodo, id: uuidv4()}]);
       //use callbacks method for deletion
        setTodos((prevTodos) => [...prevTodos, {task: newTodo, id: uuidv4()}]);
        setNewTodo("");
    }

    let updatetodoValue = (e) => {
        setNewTodo(e.target.value);
    }

    let deletetodo= (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id));// for callbacks method
        //with callbacks
        // setTodos(todos.filter((todo) => todo.id != id)); // without callbacks
    }

    let uppercaseAll = () => {
        // setTodos(
        //     todos.map((todo) => {
        //         return {
        //             ...todo,
        //              task: todo.task.toUpperCase()
        //             };
        //     })
        // );

        //with callbacks
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        }));
    };

    let uppercase1 = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    let markasdone = (id) => {
          setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                       isdone:true
                    };
                } else {
                    return todo;
                }
            })
        );
    }

let MarkAllDone = () => {
     setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
              isdone: true
            };
        }));
}




    return (
        <div>
            <div>
                <input placeholder="Add a Task" value={newTodo} onChange={updatetodoValue}/>
                <br />
                <button onClick={addTodo}>Add Task</button>
                <br />
                <br />
                <br />

                <hr />
                <h4>Task ToDo</h4>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isdone ? {textDecorationLine: "line-through"} : {}}>
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;
                            <button onClick={()=>deletetodo(todo.id)}>x</button>
                            &nbsp;&nbsp;
                            <button onClick={()=>uppercase1(todo.id)}>upercase</button>
                            &nbsp;&nbsp;
                            <button onClick={()=>markasdone(todo.id)}>MarkAsDone</button>
                        </li>
                    ))}
                </ul>
                <br />
                <button onClick={uppercaseAll}>Uppercase All</button>
                <br />
                <hr />
                <button onClick={MarkAllDone}>MarkAllDone</button>
            </div>
        </div>
    );
}