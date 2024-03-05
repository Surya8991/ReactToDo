import React, { useState } from 'react';

function Todo() {
  //Handles text Change events
  const [text, setText] = useState('');
  const [date, setDate] = useState("")
  // Store the Task
  const [todos, setTodos] = useState([]);

  // Add new tasks
  const handleAddTodo = () => {
    if (!text) return;
    const newTodos=`${text} ,By ${date}`
    setTodos([...todos, newTodos]);
    setText('');
    setDate(new Date()); //
  };

  // Delete tasks
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Edit tasks
  const handleEditTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
  };

  // Reset Tasks
  const handleReset = () => {
    setTodos([]);
    setText("")
  };

  return (
    <div className='container my-5'>
      <div className='card'>
        <div className='card-header bg-primary text-white'>
          <h3 className='card-title text-center'>Todo List</h3>
        </div>
        <div className='card-body'>
          <div className='input-group mb-3'>
            
            {/* Inputs */}
            <input type='text' className='form-control' placeholder='Enter Task' value={text} onChange={(e) => setText(e.target.value)} />
            <input type='date' className='form-control' placeholder='Compelte Task by' value={date} onChange={(e) => setDate(e.target.value)} />
           
            {/* Buttons */}
            <button className='btn btn-success' type='button' onClick={handleAddTodo} disabled={!text}>
              Add
            </button>
          </div>
          <ul className='list-group'>
            <li className='list-group-item'>
              <div className='text-center'>
                <button className='btn btn-danger btn-sm' onClick={handleReset}>
                  Reset All
                </button>
              </div>
            </li>

            {/* To Show the tasks */}
            {todos.length ? (
              todos.map((todo, index) => (
                <li className='list-group-item d-flex justify-content-between align-items-center' key={index}>
                  <div className='form-check'>
                    <input type='checkbox' className='form-check-input' id={`todo${index}`} />
                    <label htmlFor={`todo${index}`} className='form-check-label'>
                      {todo}
                    </label>
                  </div>
                  <div>
                    {/* Button for each Task */}
                    <button className='btn btn-primary btn-sm me-2' onClick={() => handleEditTodo(index, prompt('Edit todo', todo))} >
                      Edit
                    </button>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDeleteTodo(index)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div className='text-center'>
                <p>No tasks found</p>
              </div>
            )}
            {/* Task Ends */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
