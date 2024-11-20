import Hero from "./Hero";

type Props = {};

function Container({}: Props) {
	return (
		<div className="min-h-screen bg-background text-text">
			<Hero />
		</div>
	);
}

export default Container;
