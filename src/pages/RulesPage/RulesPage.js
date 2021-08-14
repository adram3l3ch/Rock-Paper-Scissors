import React from "react";
import { Wrapper } from "./RulesPage.style";
import rules from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";
import { useGlobalContext } from "../../context";

const RulesPage = () => {
	const { setShowRules } = useGlobalContext();
	return (
		<Wrapper>
			<h1>Rules</h1>
			<img src={rules} alt="" />
			<button>
				<img
					src={close}
					alt=""
					onClick={() => {
						setShowRules(false);
					}}
				/>
			</button>
		</Wrapper>
	);
};

export default RulesPage;
