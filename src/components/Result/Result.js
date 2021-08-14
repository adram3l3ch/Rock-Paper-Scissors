import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import RPS from "../RPS/RPS";
import { Container, Wrapper } from "./Result.style";

const Result = () => {
	const { setUserChoice, setHouseChoice, result, houseChoice, userChoice } =
		useGlobalContext();
	return (
		<Wrapper>
			<Container>
				<RPS name={userChoice} />
				<p>You picked</p>
			</Container>
			<Container>
				<RPS name={houseChoice} />
				<p>the house picked</p>
			</Container>
			<Container>
				<h1>{result}</h1>
				<button
					onClick={() => {
						setHouseChoice("");
						setUserChoice("");
					}}
				>
					Play Again
				</button>
			</Container>
		</Wrapper>
	);
};

export default Result;
