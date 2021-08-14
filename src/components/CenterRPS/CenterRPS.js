import React from "react";
import RPS from "../RPS/RPS";
import { Container, Image, Wrapper } from "./CenterRps.style";
import triangle from "../../assets/bg-triangle.svg";

const CenterRPS = () => {
	return (
		<Wrapper>
			<Image src={triangle} />
			<Container>
				<RPS name="paper" />
			</Container>
			<Container>
				<RPS name="scissor" />
			</Container>
			<Container>
				<RPS name="rock" />
			</Container>
		</Wrapper>
	);
};

export default CenterRPS;
