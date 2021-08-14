import React from "react";
import { Shadow, Wrapper } from "./RulesPage.style";
import rules from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";
import { useGlobalContext } from "../../context";

const RulesPage = () => {
	const { setShowRules } = useGlobalContext();
	return (
		<Shadow>
			<Wrapper>
				<h1>Rules</h1>
				<img src={rules} alt="rule" className="rule" />
				<button>
					<img
						src={close}
						alt="close-btn"
						onClick={() => {
							setShowRules(false);
						}}
					/>
				</button>
			</Wrapper>
		</Shadow>
	);
};

export default RulesPage;
