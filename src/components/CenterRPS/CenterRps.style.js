import styled from "styled-components";

export const Wrapper = styled.div`
	/* display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative; */

	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	align-content: space-between;
	height: 300px;
`;

export const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 70%;
	pointer-events: none;
`;

export const Container = styled.div`
	&:nth-child(3) {
		justify-self: flex-end;
		grid-column: 3/4;
	}
	&:nth-child(4) {
		grid-column: 2/3;
		justify-self: center;
	}
`;
