import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = {
  todos: [{ id: 1, text: 'Hello World' }],
};

//   how will make a slice==>reducer ka big version hai slice
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    // state:current state of jo bhi state and in action:we get data
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
