import styled from "styled-components";

export const ListRoot = styled.ul`
	list-style-type: none;
`;

export const ListItem = styled.li`
	color: "black";
`;

export const StyledLink = styled.a`
	text-decoration: none;
	display: block;
	font-weight: 500;
	color: gray;
	&:hover {
		text-decoration: none;
		color: black;
	}
`;

export const TitleDiv = styled.div``;

export const DivWrapper = styled.div`
	overflow: hidden;
	width: 40rem;
	margin: 1rem 1rem 1rem -2rem;
`;
