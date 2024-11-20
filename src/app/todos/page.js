'use client';

import { hygraph, GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../../lib/graphql';
import { useState, useEffect } from 'react';

async function fetchTodos() {
  const data = await hygraph.request(GET_TODOS);
  return data.todos;
}

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editTodoId, setEditTodoId] = useState(null); // Track which todo is being edited
  const [editTitle, setEditTitle] = useState('');
  const [completed, setCompleted] = useState(false); // Track completed status
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTodos() {
      const todos = await fetchTodos();
      setTodos(todos);
    }
    loadTodos();
  }, []);

  async function addTodoHandler(e) {
    e.preventDefault();
    if (!title) return;

    // Add Todo Mutation
    const data = await hygraph.request(ADD_TODO, { title });
    setTodos((prev) => [...prev, data.createTodo]);
    setTitle(''); // Clear the input field
  }

  async function deleteTodoHandler(id) {
    // Delete Todo Mutation
    await hygraph.request(DELETE_TODO, { id });
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  async function updateTodoHandler(e) {
    e.preventDefault();
    if (!editTitle) return;
  
    try {
      const data = await hygraph.request(UPDATE_TODO, {
        where: { id: editTodoId }, // Provide the unique identifier
        data: {
          title: editTitle, // Updated title
          completed: completed, // Updated completed status
        },
      });
  
      console.log("Mutation Success:", data);
  
      // Update the state with the updated todo
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editTodoId ? { ...todo, ...data.updateTodo } : todo
        )
      );
  
      // Reset the form state
      setEditTodoId(null);
      setEditTitle('');
      setCompleted(false);
      setError(null);
    } catch (error) {
      console.error("GraphQL Error:", JSON.stringify(error, null, 2));
      setError("Failed to update the todo. Please try again.");
    }
  }
  

  const handleEditClick = (todo) => {
    setEditTodoId(todo.id);
    setEditTitle(todo.title);
    setCompleted(todo.completed);
  };

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Todos</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">Dashboard</li>
          <li className="breadcrumb-item active">Todos</li>
        </ol>
        <div className="row">
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i> Todos
              </div>
              <div className="card-body">
                <table id="datatablesSimple" className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {todos.map((todo) => (
                      <tr key={todo.id}>
                        <td>{todo.title}</td>
                        <td> {todo.completed ? (
          <span className="badge text-bg-success">Completed</span>
        ) : (
            <span className="badge text-bg-danger">Not Completed</span>
        )}</td>
                        <td>
                          <button
                            className="btn btn-warning m-1"
                            onClick={() => handleEditClick(todo)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteTodoHandler(todo.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Add Todo Form */}
          <div className="col-xl-4">
            {/* Edit Todo Form */}
          {editTodoId && (
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i> Edit Todo
                </div>
                <div className="card-body">
                  <form onSubmit={updateTodoHandler}>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Edit todo title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                      <label htmlFor="inputEmail">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        
                        type="checkbox"
                        checked={completed}
                        onChange={() => setCompleted(!completed)}
                      />
                      <label htmlFor="inputCheckbox">Completed</label>
                    </div>
                    <div className="d-flex align-items-end justify-content-end mt-4 mb-0">
                      <button type="submit" className="btn btn-primary pull-end">
                        Update Todo
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          )}
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1"></i> Add Todos
              </div>
              <div className="card-body">
                <form onSubmit={addTodoHandler}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="Enter todo title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="inputEmail">Title</label>
                  </div>
                  <div className="d-flex align-items-end justify-content-end mt-4 mb-0">
                    <button type="submit" className="btn btn-primary pull-end">
                      Add Todo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
}
