import { createContext, useContext, useEffect, useState } from "react";
import rps_data from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [score, setScore] = useState(0);
	const [userChoice, setUserChoice] = useState("");
	const [houseChoice, setHouseChoice] = useState("");
	const [showRules, setShowRules] = useState(false);
	const [result, setResult] = useState("");
	const [winner, setWinner] = useState("");

	const randomChoice = () => {
		const random = Math.floor(Math.random() * 3);
		setHouseChoice(rps_data[random].name);
	};

	useEffect(() => {
		const findResult = () => {
			const user = rps_data.filter((data) => data.name === userChoice)[0];
			if (user) {
				if (userChoice === houseChoice) {
					setResult("Draw");
				} else if (user.enemy === houseChoice) {
					setResult("You lost");
					setWinner(houseChoice);
					if (score > 0) {
						setScore((score) => score - 1);
					}
				} else {
					setResult("You win");
					setWinner(userChoice);
					setScore((score) => score + 1);
				}
			}
		};
		findResult();
	}, [userChoice, houseChoice]);

	return (
		<AppContext.Provider
			value={{
				score,
				setShowRules,
				showRules,
				setUserChoice,
				userChoice,
				setHouseChoice,
				result,
				houseChoice,
				randomChoice,
				winner,
				setResult,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
