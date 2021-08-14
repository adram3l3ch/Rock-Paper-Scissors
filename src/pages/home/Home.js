import React from "react";
import CenterRPS from "../../components/CenterRPS/CenterRPS";
import Header from "../../components/header/Header";
import Result from "../../components/Result/Result";
import RPS from "../../components/RPS/RPS";
import Rules from "../../components/Rules/Rules";
import { Wrapper } from "./Home.style";

const Home = () => {
	return (
		<Wrapper>
			<Header />
			{/* <CenterRPS /> */}
			<Result />
			<Rules />
		</Wrapper>
	);
};

export default Home;
