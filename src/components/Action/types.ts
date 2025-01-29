export type ActionProps = {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
};
