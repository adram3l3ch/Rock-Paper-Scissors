import React from "react";
import CenterRPS from "../../components/CenterRPS/CenterRPS";
import Header from "../../components/header/Header";
import Result from "../../components/Result/Result";
import Rules from "../../components/Rules/Rules";
import { useGlobalContext } from "../../context";
import RulesPage from "../RulesPage/RulesPage";
import { Wrapper } from "./Home.style";

const Home = () => {
	const { showRules, houseChoice } = useGlobalContext();

	if (showRules) {
		return <RulesPage />;
	} else {
		return (
			<Wrapper>
				<Header />
				{houseChoice ? <Result /> : <CenterRPS />}
				<Rules />
			</Wrapper>
		);
	}
};

export default Home;
