import styled from "styled-components";

const StyledLink = styled.a`
	text-decoration: none;
	color: gray;
	&:hover {
		text-decoration: none;
		color: black;
	}
	&.active {
		color: red;
	}
`;

export default StyledLink;

export const StyledDiv = styled.div`
	text-align: right;
`;
