import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
	const { setUser } = useContext(UserContext);

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
