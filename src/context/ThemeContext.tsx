import { createContext, useContext, useState, useEffect } from "react";

type ContextType = {
	theme: string;
	toggleTheme: (theme: string) => void;
};

type ThemeProvider = {
	children: React.ReactNode;
};

export const themeContext = createContext({} as ContextType);
export const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
	const initialTheme = localStorage.getItem("theme") || "light";
	const [theme, setTheme] = useState(initialTheme);
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<themeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</themeContext.Provider>
	);
};
