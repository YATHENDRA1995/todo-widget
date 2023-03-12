import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { RiDeleteBin6Line } from "react-icons/ri";

import { addToDo, editToDo, deleteToDo } from "../../logic/reducers/todoSlice";
import { BoldText } from "../../styles/sharedStyles";
import {
  DelIcon,
  ToDoCheckBox,
  ToDoContainer,
  ToDoHeading,
  ToDoInput,
  ToDoItem,
  ToDoList,
  ToDoText,
  Wrapper,
} from "./Home.style";

const Home = () => {
  
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue !== "") {
      addToDoFn();
    }
  };

  const addToDoFn = () => {
    dispatch(addToDo({ id: uuid(), name: inputValue, isDone: false }));
    setInputValue("");
  };

  const deleteToDoFn = (item) => {
    dispatch(deleteToDo({ list: todoList, data: item }));
  }

  const checkedChange = (item) => {
    dispatch(editToDo({ list: todoList, data: item }));
  };

  console.log("toDoList", todoList);
  return (
    <Wrapper>
      <ToDoContainer>
        <ToDoHeading>
          <BoldText>To Do List</BoldText>
        </ToDoHeading>
        <ToDoList>
          {todoList.map((item) => (
            <ToDoItem key={item.id}>
              <ToDoCheckBox
                type="checkbox"
                checked={item.isDone}
                onChange={() => checkedChange(item)}
              />
              <ToDoText isDone={item.isDone}>{item?.name}</ToDoText>
              <DelIcon onClick={()=> deleteToDoFn(item)}>
                <RiDeleteBin6Line color="#B4161B" />
              </DelIcon>
            </ToDoItem>
          ))}
        </ToDoList>
        <ToDoInput
          type="text"
          placeholder="New Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </ToDoContainer>
    </Wrapper>
  );
};

export default Home;
