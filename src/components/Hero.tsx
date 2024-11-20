import Image from "./ui/Image";
import avatar from "@public/assets/img/avatar.jpg";

type Props = {};

function Hero({}: Props) {
	return (
		<div className="py-4 px-16">
			<section className="container mx-auto">
				<div className="flex flex-col-reverse items-start md:flex-row md:justify-between md:items-center w-full">
					<div className="flex flex-col justify-center items-start space-y-4">
						<h1 className="text-3xl md:text-4xl font-semibold">1020phug</h1>
						<p className="text-md font-thin opacity-70 md:text-lg">
							This portfolio is powered by 1020phug.
						</p>
					</div>
					<Image
						src={avatar}
						alt="1020phug"
						rounded="circle"
						className="w-20 md:w-24 h-20 md:h-24 mb-6 md:mb-0"
					/>
				</div>
			</section>
		</div>
	);
}

export default Hero;
