import styled from "styled-components";

export const ListRoot = styled.ul`
	list-style-type: none;
	margin-left: -2rem;
`;

export const ListItem = styled.li`
	color: "black";
`;

export const StyledLink = styled.a`
	text-decoration: none;
	display: block;
	font-weight: 500;
	color: gray;
	height: 2rem;
	padding-top: 1rem;
	padding-bottom: 2rem;
	&:hover {
		text-decoration: none;
		color: black;
	}
`;

export const TitleDiv = styled.div``;

export const DivWrapper = styled.div`
	overflow: hidden;
	display: inline-block;
	width: 40rem;
	box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
	-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	&:hover {
		-webkit-transform: translateX(-3px);
		-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		transform: translateX(-3px);
		box-shadow: 0 3px 0px rgba(0, 0, 0, 0.3);
	}
`;
