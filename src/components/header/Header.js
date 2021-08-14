import React from "react";
import { Image, Score, Wrapper } from "./Header.style";
import Logo from "../../assets/logo.svg";
import { useGlobalContext } from "../../context";

const Header = () => {
	const { score } = useGlobalContext();
	return (
		<Wrapper>
			<Image src={Logo} alt="logo" />
			<Score>
				<h2>Score</h2>
				<p>{score}</p>
			</Score>
		</Wrapper>
	);
};

export default Header;
