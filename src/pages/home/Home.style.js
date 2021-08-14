import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: radial-gradient(
		circle at top,
		hsl(214, 47%, 23%),
		hsl(237, 49%, 15%)
	);
	position: relative;
	z-index: -2;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
