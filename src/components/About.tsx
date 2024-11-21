import { FaArrowRight } from "react-icons/fa6";

type Props = {};

const content = {
	title: "About me",
	contents: {
		p1: "I love working with jamstack and headless architecture. I am currently building with TypeScript, Cosmic, Next.js, Tailwind CSS, and Node.js.",
		p2: "Coming from a background in audio engineering and music production, I quickly found that writing code was a bit like putting the secret sauce on a vocal mix; there's not necessarily a single way to do it, and the person behind the keyboard has the power to put their style into a great solution.",
		p3: "My favorite part about coding is the constant innovation of architectures, libraries, and frameworks. I think web development is experiencing a major breakthrough with headless architecture and jamstack, and want to be involved in any way I can.",
		btnText: "Contact Me",
	},
};

const About = (props: Props) => {
	return (
		<section id="about" className="mt-8">
			<div className="container mx-auto">
				<h1 className="text-3xl border-b-2 border-primary pb-2 w-fit mb-8">
					{content.title}
				</h1>
				<div className="text-force-primary space-y-4 mb-8">
					<p>{content.contents.p1}</p>
					<p>{content.contents.p2}</p>
					<p>{content.contents.p3}</p>
				</div>
				<a
					href="#contact"
					className="flex items-center space-x-2 text-primary hover:translate-x-2 transition-all duration-300"
				>
					<FaArrowRight size={18} />
					<span className="underline-offset-4 underline">
						{content.contents.btnText}
					</span>
				</a>
			</div>
		</section>
	);
};

export default About;
