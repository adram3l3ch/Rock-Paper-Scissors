import React from "react";
import RPS from "../RPS/RPS";
import { Container, Wrapper } from "./Result.style";

const Result = () => {
	return (
		<Wrapper>
			<Container>
				<RPS name="rock" />
				<p>You picked</p>
			</Container>
			<Container>
				<RPS name="scissor" />
				<p>the house picked</p>
			</Container>
			<Container>
				<h1>You Lose</h1>
				<button>Play Again</button>
			</Container>
		</Wrapper>
	);
};

export default Result;
