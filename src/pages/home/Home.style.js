import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: radial-gradient(
		circle at top,
		hsl(214, 47%, 23%),
		hsl(237, 49%, 15%)
	);
`;
export const Container = styled.div`
	width: 100%;
	height: 90vh;
	max-height: 1000px;
	position: relative;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 768px) {
		padding: 50px 10px;
	}
`;
