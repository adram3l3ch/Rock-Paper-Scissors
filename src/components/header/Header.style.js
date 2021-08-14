import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	padding: 20px;
	border: 3px solid hsl(217, 16%, 45%);
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
	max-height: 150px;
	max-width: 700px;
	width: 100%;
	margin: 0 auto;

	@media (min-width: 768px) {
		margin-bottom: 50px;
	}
`;

export const Image = styled.img`
	height: 100%;
`;

export const Score = styled.div`
	text-align: center;
	height: 100%;
	background-color: white;
	padding: 15px 30px;
	border-radius: 5px;
	width: 30%;
	max-width: 120px;

	h2 {
		font-size: 0.9rem;
		font-weight: 600;
		color: hsl(229, 64%, 46%);
		text-transform: uppercase;
	}

	p {
		font-size: 3rem;
		font-weight: 700;
		color: hsl(229, 25%, 31%);
	}
`;
