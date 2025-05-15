import { useState } from "react";
import delete_icon from '../assets/delete.png'
import tick_icon from '../assets/tick.png'
import untick_icon from '../assets/not_tick.png'


const ToDoItems = ({ text, id, isComplete, deleteTodo, toggle, startEditing, saveEdit, isEditing }) => {
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim() === "") return; 
    saveEdit(id, editText.trim());
  };

  return (
    <div className='flex items-center justify-between my-4 border-2 h-12 border-gray-200 p-3 rounded-full overflow-hidden'>
      <div className='flex items-center gap-2'>
        <img onClick={() => { toggle(id) }} className="w-7" src={isComplete ? tick_icon : untick_icon} alt="" />

        {isEditing ? (
          <input
            className="text-base border-b-2 border-gray-300 outline-none"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()} // Save on Enter key
          />
        ) : (
          <p className={isComplete ? "text-sm text-slate-500 line-through" : "text-base"}>{text}</p>
        )}
      </div>
      <div className='flex items-center gap-2'>
        {isEditing ? (
          <button
            onClick={handleSave}
            title='Save'
            className='border-none rounded-full w-8 h-8 text-white text-lg font-medium cursor-pointer'
          >
            💾
          </button>
        ) : (
          <button
            onClick={() => startEditing(id)}
            title='Edit'
            className='border-none rounded-full w-8 h-8 text-white text-lg font-medium cursor-pointer'
          >
            ✏️
          </button>
        )}
        <button onClick={() => { deleteTodo(id) }} title='Delete' className='border-none rounded-full w-8 h-8 text-white text-lg font-medium cursor-pointer'>
          <img className='w-6' src={delete_icon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default ToDoItems