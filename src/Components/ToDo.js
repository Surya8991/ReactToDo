import React, { useState } from 'react';

function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!text) return;
    setTodos([...todos, text]);
    setText('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
  };

  const handleReset = () => {
    setTodos([]);
  };

  return (
    <div className='container my-5'>
      <div className='card'>
        <div className='card-header bg-primary text-white'>
          <h3 className='card-title'>Todo List</h3>
        </div>
        <div className='card-body'>
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Enter Input' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='btn btn-success' type='button' onClick={handleAddTodo}>
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
                    <button className='btn btn-primary btn-sm me-2' onClick={() => handleEditTodo(index, prompt('Edit todo', todo))}>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
