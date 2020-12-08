import { remove } from 'lodash';
import React from 'react'
import styled from 'styled-components';

const StyledTodoItemButton = styled.button`
    border: none;
    outline: none;
    background; none;
    margin: 5px;
    font-size: 20px;
    &:hover{
        text-decoration: line-through;
    }
`;

const Wrapper = styled.div`
    margin: 15px 0px;
    display: flex;
    margin: 0 auto;
`
const ExitButton = styled.div`
    cursor: not-allowed;
`

const TodoItems = ({todo, removeTodo, toggleTodo}) => {
    const removeSelf = e =>{
        e.preventDefault();
        removeTodo(todo.id);
    }

    const toggleSelf = e =>{
        e.preventDefault();
        toggleTodo(todo.id);
    }

    return (
        <Wrapper>
            <StyledTodoItemButton onClick={toggleSelf}>
                {todo.value}
            </StyledTodoItemButton>
            <ExitButton onClick={removeSelf}>
                &times;
            </ExitButton>
        </Wrapper>
    )
}

export default TodoItems
