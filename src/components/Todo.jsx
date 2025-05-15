import { useEffect, useRef, useState } from "react"
import todo_icon from "../assets/todo_icon.png"
import ToDoItems from "./ToDoItems"

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const [editingId, setEditingId] = useState(null); // Track the ID of the item being edited (becally get the id )
    const inputRef = useRef(null);

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") return;
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prev) => prev.filter((item) => item.id !== id));
    }

    const toggle = (id) => {
        setTodoList((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, isComplete: !item.isComplete }
                }
                return item;
            })
        })
    }

    const startEditing = (id) => {
        setEditingId(id); // Set the ID of the item being edited (we use date as id)
    }

    const saveEdit = (id, newText) => {
        setTodoList((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, text: newText };
                }
                return item;
            });
        });
        setEditingId(null); // editing end
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);


    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[650px]  rounded-xl'>

            <div className='flex items-center mt-7 gap-2'>
                <img className="w-8" src={todo_icon} alt="" />
                <h1 className='text-3xl font-semibold'>TO-DO List</h1>
            </div>

            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input ref={inputRef} maxLength={35} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add Your Task" />
                <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">ADD +</button>
            </div>

            <div >
            {
                todoList.map((item)=>{
                    return (
                        <ToDoItems
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            isComplete={item.isComplete}
                            deleteTodo={deleteTodo}
                            toggle={toggle}
                            startEditing={startEditing}
                            saveEdit={saveEdit}
                            isEditing={editingId === item.id} 
                        />
                    )
                })
            }
            </div>

        </div>
    )
}

export default Todo