import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import { setSearch } from '../redux/slices/inputSlice';
import { addTodo, deleteTodo, toggleCheck } from '../redux/slices/TodosSlice';

import type { RootState } from '../redux/store';

function App() {
  const dispatch = useDispatch();

  const searchValue = useSelector((state: RootState) => state.input.search);
  const todo = useSelector((state: RootState) => state.todos.todos);
  // console.log(todo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(searchValue));
    dispatch(setSearch(''));
  };

  const toggleItem = (id: string) => {
    dispatch(toggleCheck({ id }));
  };

  return (
    <>
      <div>Text: {searchValue}</div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </form>
      {todo.map((item, index) => {
        return (
          <div className="todo" key={index}>
            <label htmlFor="check">
              <input
                type="checkbox"
                id="check"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
              />
              <p>{item.title}</p>
            </label>
            <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
