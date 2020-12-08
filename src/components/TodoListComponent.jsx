import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItems'
import _ from 'lodash';

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
`

const Title = styled.p`
    font size: 30px;
    font-weight: bold;
    color: blue;
`

const TodoListComponent = ({title, doneState, todos, removeTodo, toggleTodo}) =>{
    return(
        <Wrapper>
            {
                todos.filter(todo => todo.doneState === doneState).map(todo =>(
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                ))
            }
        <Title>
                {title}
        </Title>
        </Wrapper>
    )
}

export default TodoListComponent;