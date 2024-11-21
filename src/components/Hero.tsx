import Image from "./ui/Image";
import avatar from "@public/assets/img/avatar.jpg";
import { FaFacebook, FaGithub, FaAddressCard } from "react-icons/fa6";

type Props = {};

function Hero({}: Props) {
	return (
		<div className="p-12">
			<section className="container mx-auto">
				<div className="flex flex-col-reverse items-start md:flex-row md:justify-between md:items-center w-full">
					<div className="flex flex-col justify-center items-start space-y-4 w-full">
						<h1 className="text-3xl md:text-4xl font-semibold">1020phug</h1>
						<p className="text-md font-thin opacity-80 md:text-lg">
							This portfolio is powered by 1020phug.
						</p>
						<div className="flex items-baseline w-full">
							<a
								href="https://github.com/1020phug"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center mr-6 justify-center space-x-2 px-4 py-1 bg-transparent border-2 border-primary text-md text-text rounded-md hover:text-primary transition-all duration-300"
							>
								<FaAddressCard />
								<span>Github</span>
							</a>
							<div className="flex items-center text-text/70 w-full space-x-4">
								<a
									href="https://www.facebook.com/1020phug"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:-translate-y-2 transition-all duration-300 delay-50"
								>
									<FaFacebook size={20} />
								</a>
								<a
									href="https://github.com/1020phug"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:-translate-y-2 transition-all duration-300 delay-50"
								>
									<FaGithub size={20} />
								</a>
							</div>
						</div>
					</div>
					<Image
						src={avatar}
						alt="1020phug"
						rounded="circle"
						other="w-48 md:w-52 h-48 md:h-52 mb-6 md:mb-0"
					/>
				</div>
			</section>
		</div>
	);
}

export default Hero;
