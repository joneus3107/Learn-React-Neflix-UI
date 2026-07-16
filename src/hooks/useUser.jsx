import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
	const { setUser } = useContext(UserContext);

	const changeUser = nextUser => {
		setUser(nextUser);
	}

	return {
		changeUser
	}
}
