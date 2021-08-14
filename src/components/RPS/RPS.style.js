import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border-width: 20px solid;
	background-color: white;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	&:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 130%;
		height: 130%;
		background: linear-gradient(45deg, ${(props) => props.borderColor});
		border-radius: 50%;
		z-index: -1;
	}
`;

export const Image = styled.img`
	display: block;
	width: 50%;
	height: 50%;
	object-fit: contain;
`;
