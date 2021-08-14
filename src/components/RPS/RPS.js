import React from "react";
import rps_data from "../../data";
import { Wrapper, Image } from "./RPS.style";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissor from "../../assets/icon-scissors.svg";

const RPS = ({ name }) => {
	const item = rps_data.filter((item) => item.name === name)[0];
	console.log(item.img);
	return (
		<Wrapper {...item}>
			<Image
				src={
					name === "rock" ? rock : name === "paper" ? paper : scissor
				}
			/>
		</Wrapper>
	);
};

export default RPS;
