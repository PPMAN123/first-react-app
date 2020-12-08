import { useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.form`
    text-align: left;
    display: flex;
    justify-content: center;
`;

const StyledInput = styled.input`
    width: 30vw;
    font-size: 24px;
    transition: width 0.5s ease-in-out;
    &:focus{
        background-color: lightblue;
        width: 70vw;
    }
`;

const StyledSubmitButton = styled.button`
    display: none;
`;

const TodoInputComponent = ({addToTodos}) =>{
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e =>{
        const {value} = e.target;
        setInputValue(value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(!_.isEmpty(inputValue.trim())){
            addToTodos(inputValue);
            setInputValue('');
        }
    }

    return(
        <Wrapper onSubmit={handleSubmit}>
            <StyledInput placeholder="Enter your todo item..." value={inputValue} onChange={handleInputChange}/>
            <StyledSubmitButton type="submit"  />
        </Wrapper>
    )
}

export default TodoInputComponent;