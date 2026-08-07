import { createContext } from "react";

export const MainLayoutContext = createContext({
	isLoading: false,
	setIsLoading: () => {}
});