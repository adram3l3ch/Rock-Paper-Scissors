import React from "react";
import CenterRPS from "../../components/CenterRPS/CenterRPS";
import Header from "../../components/header/Header";
import Result from "../../components/Result/Result";
import Rules from "../../components/Rules/Rules";
import { useGlobalContext } from "../../context";
import RulesPage from "../RulesPage/RulesPage";
import { Container, Wrapper } from "./Home.style";

const Home = () => {
	const { showRules, houseChoice } = useGlobalContext();

	return (
		<Wrapper>
			<Container>
				{showRules ? <RulesPage /> : ""}
				<Header />
				{houseChoice ? <Result /> : <CenterRPS />}
			</Container>
			<Rules />
		</Wrapper>
	);
};

export default Home;
