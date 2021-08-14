import React from "react";
import rps_data from "../../data";
import { Wrapper, Image } from "./RPS.style";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissor from "../../assets/icon-scissors.svg";
import { useGlobalContext } from "../../context";

const RPS = ({ name }) => {
	const { setUserChoice, randomChoice, winner, result } = useGlobalContext();
	const item = rps_data.filter((item) => item.name === name)[0];
	return (
		<div className={name === winner && result ? "s" : ""}>
			<Wrapper
				{...item}
				onClick={() => {
					setUserChoice(item.name);
					randomChoice();
				}}
			>
				<Image
					src={
						name === "rock"
							? rock
							: name === "paper"
							? paper
							: scissor
					}
				/>
			</Wrapper>
		</div>
	);
};

export default RPS;
