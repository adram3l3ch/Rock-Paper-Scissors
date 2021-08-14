import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: 1fr 1fr 1fr;
	align-content: space-between;
	height: 300px;
	max-width: 500px;
	margin: 0 auto;

	@media (min-width: 768px) {
		margin-bottom: 150px;
	}
`;

export const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 70%;
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	&:nth-child(3) {
		justify-self: center;
		grid-column: 3/4;
	}
	&:nth-child(2) {
		grid-column: 1/2;
	}
	&:nth-child(4) {
		grid-column: 1/4;
		justify-self: center;
	}
`;
