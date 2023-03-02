import React, { useState } from 'react'

function Todo() {
    let toDoValue = []
    const [text, setText] = useState("")
    const [addText, setAddText] = useState([]);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd = () => {
        setAddText([...addText, text])
    }
    const handleReset=()=>{
        setAddText([])
    }
    return (
        <>
            <div className='container my-3'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter Input" value={text} onChange={handleChange} />
                    <button className="btn btn-success" type="button" id="button-addon2" onClick={handleAdd}>Add</button>
                    <button className="me-2 btn btn-danger" type="button" id="button-addon2" onClick={handleReset}> Reset Todo</button>
                </div>
                <div>
                    {addText?.length > 0 ? (
                        <ol className="todo-list">
                            {addText.map((todo, index) => (
                                <div className="todo" >
                                    <li key={index}><label><input type="checkbox" /><h4>{todo}</h4></label> </li>
                                    {/* <button className="delete-button">Delete</button> */}
                                </div>
                            ))}
                        </ol>
                    ) : (
                        <div className="empty">
                            <p>No task found</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Todo