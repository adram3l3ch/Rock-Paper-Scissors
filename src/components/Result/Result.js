import React from "react";
import { useGlobalContext } from "../../context";
import RPS from "../RPS/RPS";
import { Container, Wrapper } from "./Result.style";
import win from "../../assets/cash.mp3";
import lose from "../../assets/aww.mp3";

const Result = () => {
	const {
		setUserChoice,
		setHouseChoice,
		result,
		houseChoice,
		userChoice,
		setResult,
	} = useGlobalContext();
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
				<audio src={result == "You win" ? win : lose} autoPlay></audio>
				<button
					onClick={() => {
						setHouseChoice("");
						setUserChoice("");
						setResult("");
					}}
				>
					Play Again
				</button>
			</Container>
		</Wrapper>
	);
};

export default Result;
