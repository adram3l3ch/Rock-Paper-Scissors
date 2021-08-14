import React from "react";
import { Image, Score, Wrapper } from "./Header.style";
import Logo from "../../assets/logo.svg";

const Header = () => {
	return (
		<Wrapper>
			<Image src={Logo} />
			<Score>
				<h2>Score</h2>
				<p>15</p>
			</Score>
		</Wrapper>
	);
};

export default Header;
