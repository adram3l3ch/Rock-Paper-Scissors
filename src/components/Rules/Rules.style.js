import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0.5em 2em;
	border-radius: 10px;
	border: 2px solid white;
	width: fit-content;
	margin: 0 auto;
	cursor: pointer;
	z-index: 5;

	button {
		font-size: 1rem;
		font-family: "Barlow Semi Condensed", sans-serif;
		background: none;
		border: none;
		color: white;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		position: absolute;
		bottom: 5%;
		right: 5%;
	}
`;
