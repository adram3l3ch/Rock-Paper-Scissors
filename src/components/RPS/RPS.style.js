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
	border-bottom: 8px solid #0003;

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 75%;
		height: 75%;
		background-color: white;
		border-radius: 50%;
		border-top: 8px solid #0003;
		pointer-events: none;
		z-index: 0;
	}

	@media (min-width: 768px) {
		width: 200px;
		height: 200px;
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
