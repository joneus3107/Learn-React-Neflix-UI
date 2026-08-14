import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useUser = () => {
	const { setUser } = useContext(ThemeContext);

	const changeUser = nextUser => {
		setUser(nextUser);
		sessionStorage.setItem("user", JSON.stringify(nextUser));
	}

	const logOut = () => {
		setUser(null)
		sessionStorage.removeItem("user")
	}

	return {
		changeUser,
		logOut
	}
}
