import styled from 'styled-components';

const NavContainer = styled.ul`
    text-align: right;
`;

const NavItem = styled.li`
    cursor: pointer;
    display: inline-block;
    list-style-type: none;
    margin-left: 10px;
    padding: 5px 10px;
`;

export { NavContainer, NavItem };