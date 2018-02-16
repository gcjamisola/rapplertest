import styled from 'styled-components';

const NavContainer = styled.ul`
	background: #232d3b;
	display: flex;
	height: 50px;
	justify-content: flex-end;
	margin: 0;
	padding: 0;
`;

const NavItem = styled.li`
		color: aliceblue;
		cursor: pointer;
		border-bottom: none;
    justify-content: flex-end;
    list-style-type: none;
		margin: auto 0;
		margin-right: 1em;
		padding: 5px 10px;
		transition: border-bottom 0.2s ease;

		&:hover {
			border-bottom: 2px solid #61ccff;
		}
`;

export { NavContainer, NavItem };
