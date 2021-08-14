import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	padding: 20px;
	border: 5px solid hsl(217, 16%, 45%);
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
	max-height: 150px;
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
