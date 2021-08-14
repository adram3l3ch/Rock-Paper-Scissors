import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper } from "./Rules.style";

const Rules = () => {
	const { setShowRules } = useGlobalContext();
	return (
		<Wrapper
			onClick={() => {
				setShowRules(true);
			}}
		>
			<button>Rules</button>
		</Wrapper>
	);
};

export default Rules;
