import Hero from "./Hero";
import About from "./About";

type Props = {};

function Container({}: Props) {
	return (
		<div className="min-h-screen bg-background text-text">
			<Hero />
			<About />
		</div>
	);
}

export default Container;
