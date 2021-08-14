import styled from "styled-components";

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: white;
	z-index: 5;
	padding: 100px 50px;
	text-transform: uppercase;
	color: hsl(229, 25%, 31%);

	@media (min-width: 600px) {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		max-width: 500px;
		height: 50%;
		border-radius: 5px;

		h1 {
			position: absolute;
			top: 5%;
			left: 5%;
		}

		button {
			position: absolute;
			top: 8%;
			right: 5%;
		}
	}

	.rule {
		width: 70%;
		min-width: 250px;
		max-width: 650px;
	}

	button {
		background: none;
		border: none;
		width: 40px;
		cursor: pointer;
	}
`;

export const Shadow = styled.div`
	position: absolute;
	inset: 0;
	z-index: 4;
	@media (min-width: 600px) {
		background-color: #000c;
	}
`;
