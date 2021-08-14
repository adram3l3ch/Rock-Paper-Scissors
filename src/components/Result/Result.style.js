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
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	&:nth-child(2) {
		justify-self: center;
		grid-column: 3/4;
		pointer-events: none;
	}
	&:nth-child(1) {
		grid-column: 1/2;
		pointer-events: none;
	}
	&:nth-child(3) {
		grid-column: 1/4;
		justify-self: center;
		color: white;
		text-transform: uppercase;
		font-size: 2rem;
	}

	button {
		background-color: white;
		font-size: 1.2rem;
		font-family: "Barlow Semi Condensed", sans-serif;
		padding: 0.7em 3em;
		border: none;
		border-radius: 5px;
		margin-top: 20px;
		text-transform: uppercase;
		color: hsl(229, 25%, 31%);
		letter-spacing: 0.2em;
		cursor: pointer;
	}

	p {
		color: white;
		font-size: 1rem;
		margin: 30px 0;
		text-transform: uppercase;
		width: max-content;
	}
`;
