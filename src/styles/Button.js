import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.primary ? 'blue' : 'white'};
    padding: 10px 5px;
    font-weight: bold;
    border-radius: 10px;
`;

export { Button };