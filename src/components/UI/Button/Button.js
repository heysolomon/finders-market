import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    /* #4F7F19 */
    padding: 10px;
    color: ${(props) => props.color};
    border: 0;
    border-radius: 5px;
    background-color: ${(props) => props.background};

`