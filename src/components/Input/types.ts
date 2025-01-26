type InputProps = {
	type: 'text' | 'email' | 'password';
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
