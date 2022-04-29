import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuid } from 'uuid';

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {

  const [visibility, setVisibility] = useState(true);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setVisibility((visibility) => !visibility)
  }
  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }



  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    // const { name, value } = evt.target;
    // setFormData(fData => ({
    //   ...fData,
    //   [name]: value,
    // }));

  }

  function renderTodo() {
    console.log("asdfsdf")
    return (
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo id={todo.id}
          title={todo.title}
          description={todo.description}
          priority={todo.priority} />
      </div>
    );
  }

  return (
    <div className="EditableTodo">

      {visibility === true ? renderTodo() : <TodoForm />}
    </div>
  );
}

export default EditableTodo;
