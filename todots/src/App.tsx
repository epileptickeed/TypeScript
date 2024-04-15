import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'


interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })
  const [todoValue, setTodoValue] = useState('')

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTodos((currentTodos: TodoItem[]) => {
      console.log(currentTodos)
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: todoValue, completed: false}
      ]
    })

    setTodoValue('')
    // console.log(todoValue)
  }

  const deleteTodo = (id: string) => {
    setTodos((currentTodos: TodoItem[]) => {
      return currentTodos.filter((todo: TodoItem) => todo.id !== id)
    })
  }

  const checkItem = (id: string, completed: boolean) => {
    setTodos((currentTodos: TodoItem[]) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  return (
    <div className='main'>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <input type="submit" />
      </form>

      <div className='todo_items'>
        {todos.map((item, index) => {
          return (
            <div className='item' key={item.id}>
              <input type="checkbox" 
                checked={item.completed}
                onChange={(e) => checkItem( item.id, e.target.checked )}
              />
              <p>{item.title}</p>
              <button className='btn btnDanger'
                onClick={() => deleteTodo(item.id)}
              >Delete</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
