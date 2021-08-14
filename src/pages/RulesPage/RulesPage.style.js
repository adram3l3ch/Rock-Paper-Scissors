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
	min-height: 100vh;
	background-color: white;
	z-index: 5;
	padding: 100px 50px;

	img {
		width: 80%;
	}

	button {
		background: none;
		border: none;
		width: 30px;
		cursor: pointer;
	}
`;
