import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/CounterSlice';
import inputSlice from './slices/inputSlice';
import TodosSlice from './slices/TodosSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    input: inputSlice,
    todos: TodosSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
