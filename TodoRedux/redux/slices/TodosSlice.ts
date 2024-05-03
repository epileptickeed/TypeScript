import { createSlice } from '@reduxjs/toolkit';

export interface TodoState {
  todos: any[];
}

const initialState: TodoState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      });
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    toggleCheck(state, action) {
      const todoItem = state.todos.find((item) => item.id === action.payload.id);
      if (todoItem) {
        todoItem.completed = !todoItem.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCheck } = TodoSlice.actions;

export default TodoSlice.reducer;
