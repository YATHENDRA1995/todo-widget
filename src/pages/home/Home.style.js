import styled from "styled-components"
import { customColors } from "../../styles/theme"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 16px;
`
export const ToDoContainer = styled.div`
  background: ${({ theme }) => customColors?.white};
  padding: 12px 24px;
  border-radius: 20px;
  min-width: 300px;
  width: fit-content;
  height: fit-content;
  max-height: 600px;
  overflow-y: auto;
`
export const ToDoHeading = styled.h1`
  text-align: center;
`

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`
export const ToDoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`
export const ToDoCheckBox = styled.input`
  width: 20px;
  height: 20px;
`

export const ToDoText = styled.p`
  font-size: 24px;
  text-decoration: ${({ isDone }) => isDone ? 'line-through': 'none'};
`
export const ToDoInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  font-size: 16px;
`
export const DelIcon = styled.span`
  flex: 1;
  text-align: right;
  cursor: pointer;
`
