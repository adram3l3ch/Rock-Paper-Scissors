import styled from "styled-components";

export const Wrapper = styled.div`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	border-width: 20px solid;
	background: linear-gradient(45deg, ${(props) => props.borderColor});
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100px;
		height: 100px;
		background-color: white;
		border-radius: 50%;
		pointer-events: none;
		z-index: 0;
	}
`;

export const Image = styled.img`
	display: block;
	width: 40%;
	height: 40%;
	object-fit: contain;
	z-index: 1;
	pointer-events: none;
`;
