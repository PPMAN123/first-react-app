import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
    text-align: left;
`;

const StyledInput = styled.input`

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
        addToTodos(inputValue)
    }

    return(
        <Wrapper onSubmit={handleSubmit}>
            <StyledInput placeholder="Enter your todo item..." value={inputValue} onChange={handleInputChange}/>
            <StyledSubmitButton type="submit"  />
        </Wrapper>
    )
}

export default TodoInputComponent;