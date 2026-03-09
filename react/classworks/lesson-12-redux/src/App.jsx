import "./App.css"
import { connect } from "react-redux"
import {
  plusOneAction,
  minusOneAction,
  resetAction,
  sendDataAction,
} from "./redux/actions/counter"
import { useState } from "react"
import { addTodoAction, deleteTodoAction } from "./redux/actions/todo"

// function App({ count, name, plusOne, minusOne, reset }) {
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={plusOne}>Plus one</button>
//       <button onClick={minusOne}>Minus one</button>
//       <button onClick={reset}>Reset</button>
//       <h2>Username: {name}</h2>
//     </div>
//   )
//}

// function App({ count, name, dispatch }) {
//   const userData = {
//     id: "21312",
//     username: "Carl",
//     phone: "24232423421",
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button
//         onClick={() => {
//           dispatch(plusOneAction())
//         }}
//       >
//         Plus one
//       </button>
//       <button
//         onClick={() => {
//           dispatch(minusOneAction())
//         }}
//       >
//         Minus one
//       </button>
//       <button
//         onClick={() => {
//           dispatch(resetAction())
//         }}
//       >
//         Reset
//       </button>
//       <button onClick={() => dispatch(sendDataAction(userData))}>
//         Send data to redux
//       </button>
//       <h2>Username: {name}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     count: state.count,
//     name: state.name,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     plusOne: () => dispatch(plusOneAction()),
//     minusOne: () => dispatch(minusOneAction()),
//     reset: () => dispatch(resetAction()),
//   }
// }

// export default connect(mapStateToProps /* mapDispatchToProps*/)(App)

function App({ todos, dispatch }) {
  const [title, setTitle] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    if (title === "") return

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      completed: false,
    }

    dispatch(addTodoAction(newTodo))

    setTitle("")
  }

  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button type="submit">Add to do</button>
      </form>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <p>
              {todo.id} {todo.title}{" "}
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(deleteTodoAction(todo.id))}
              >
                X
              </span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.data,
  }
}

export default connect(mapStateToProps)(App)
