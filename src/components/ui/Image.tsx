import { VariantProps, cva } from "class-variance-authority";

const variants = cva("block overflow-hidden", {
	variants: {
		size: {
			default: "w-5 h-5",
			sm: "w-4 h-4",
			md: "w-6 h-6",
			lg: "w-7 h-7",
			xl: "w-8 h-8",
			avatar: "w-[50px] h-[50px]",
		},
		rounded: {
			none: "rounded-none",
			circle: "rounded-full",
		},
	},
	defaultVariants: {
		size: "default",
		rounded: "none",
	},
});

export interface Props
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof variants> {
	src: string;
	alt: string;
	size?: "default" | "sm" | "md" | "lg" | "xl" | "avatar";
	rounded?: "none" | "circle";
}

function Image({
	className: string,
	src,
	alt,
	size,
	rounded,
	...props
}: Props) {
	return (
		<div className={variants({ className: string, size, rounded })} {...props}>
			<img src={src} alt={alt} className="w-full h-full" />
		</div>
	);
}

export default Image;