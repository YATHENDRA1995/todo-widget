import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList, action?.payload]
      }
    },
    editToDo: (state, action) => {
      let tempData = JSON.parse(JSON.stringify(action.payload.list))
      const modifiedData = tempData.map((item) => {
        if (item?.id === action?.payload?.data?.id) {
          let temp = item.isDone
          item.isDone = !temp
        }
        return item
      })
      return {
        ...state,
        todoList: [...modifiedData]
      }
    },
    deleteToDo: (state, action) => {
      let tempData = JSON.parse(JSON.stringify(action.payload.list))
      const modifiedData = tempData.filter((item) => (item?.id !== action?.payload?.data?.id))
      return {
        ...state,
        todoList: [...modifiedData]
      }
    }
  }
})

export const { addToDo, editToDo, deleteToDo } = todoSlice.actions

export default todoSlice.reducer