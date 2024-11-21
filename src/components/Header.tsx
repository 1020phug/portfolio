import Image from "./ui/Image";
import logo from "@public/assets/img/avatar.jpg";
import {
	FaFacebook,
	FaGithub,
	FaMoon,
	FaSun,
	FaBarsStaggered,
	FaX,
} from "react-icons/fa6";
import { useContext, useState } from "react";
import { themeContext } from "@/context/ThemeContext";
import { cn } from "./ults/cn";

export interface IHeaderProps {
	children?: React.ReactNode;
}

const SubNav = ({ theme, toggleTheme, toggleMenu }) => {
	return (
		<ul
			className={cn(
				"absolute flex flex-col transition-all duration-300 space-y-6 py-24 px-8 bg-background rounded-lg w-full h-full top-0 left-0 right-0 bottom-0 z-50 text-sm text-text"
			)}
		>
			<li className="mx-2 text-md font-medium">
				<a onClick={toggleMenu} href="#about">
					About
				</a>
			</li>
			<li className="mx-2 text-md font-medium">
				<a onClick={toggleMenu} href="#projects">
					Projects
				</a>
			</li>
			<li className="mx-2 text-md font-medium">
				<a onClick={toggleMenu} href="#contact">
					Contact
				</a>
			</li>
			<li>
				<ThemeControl theme={theme} toggleTheme={toggleTheme} />
			</li>

			<FaX
				size={24}
				className="absolute top-16 right-8 cursor-pointer"
				onClick={toggleMenu}
			/>
		</ul>
	);
};

const Nav = () => {
	return (
		<ul className="hidden md:flex flex-1 justify-end items-center text-text">
			<li className="mx-2 text-md font-medium after:content-[''] after:block after:w-0 after:h-1 after:absolute relative after:left-0 after:right-0 after:-bottom-2 after:origin-left hover:after:origin-right hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:scale-100 after:scale-0">
				<a href="#about">About</a>
			</li>
			<li className="mx-2 text-md font-medium after:content-[''] after:block after:w-0 after:h-1 after:absolute relative after:left-0 after:right-0 after:-bottom-2 after:origin-left hover:after:origin-right hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:scale-100 after:scale-0">
				<a href="#projects">Projects</a>
			</li>
			<li className="mx-2 text-md font-medium after:content-[''] after:block after:w-0 after:h-1 after:absolute relative after:left-0 after:right-0 after:-bottom-2 after:origin-left hover:after:origin-right hover:after:w-full after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:scale-100 after:scale-0">
				<a href="#contact">Contact</a>
			</li>
		</ul>
	);
};

const ThemeControl = ({ theme, toggleTheme }) => {
	return (
		<button
			className="w-10 h-10 bg-transparent hover:bg-primary/70 rounded-full transition-all duration-300 flex items-center justify-center "
			onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "dark" ? (
				<FaMoon size={24} className="text-text" />
			) : (
				<FaSun size={24} className="text-text" />
			)}
		</button>
	);
};

export function Header(props: IHeaderProps) {
	const [isOpen, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};
	const { theme, toggleTheme } = useContext(themeContext);
	return (
		<>
			{isOpen && (
				<SubNav
					theme={theme}
					toggleTheme={toggleTheme}
					toggleMenu={toggleMenu}
				/>
			)}
			<div className="bg-background relative flex justify-center items-center">
				<header className="container mx-auto text-text flex justify-between items-center py-4 px-16">
					<div className="flex space-x-2 items-center">
						<Image
							src={logo}
							alt="Logo"
							size="avatar"
							rounded="circle"
							className="mr-4"
						/>
						<h1 className="text-3xl md:text-4xl font-semibold">1020phug</h1>
					</div>
					<Nav />
					<div className="flex items-center space-x-2 py-2 px-8">
						<a
							href="https://www.facebook.com/1020phug"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:-translate-y-2 transition-all duration-300 delay-50 hidden md:block"
						>
							<FaFacebook size={24} className="text-text" />
						</a>
						<a
							href="https://github.com/1020phug"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:-translate-y-2 transition-all duration-300 delay-50 hidden md:block"
						>
							<FaGithub size={24} className="text-text" />
						</a>
						<div className="hidden md:block">
							<ThemeControl theme={theme} toggleTheme={toggleTheme} />
						</div>
						<div
							className="block md:hidden cursor-pointer"
							onClick={toggleMenu}
						>
							<FaBarsStaggered size={24} className="text-text" />
						</div>
					</div>
				</header>
			</div>
		</>
	);
}
