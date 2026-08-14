import { createContext } from "react";

export const ThemeContext = createContext({
	user: null,
  setUser: () => {},
	searchParam: null,
	setSearchParam: () => {},
});
