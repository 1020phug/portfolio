import Container from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React from "react";

export interface IAppProps {}

class App extends React.Component<IAppProps> {
	public render() {
		return (
			<div className="relative">
				<Header />
				<Container />
				<Footer />
			</div>
		);
	}
}

export default App;
