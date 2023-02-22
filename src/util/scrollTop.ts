export const scrollTop = () => {
	const root = document.getElementById("root") as HTMLDivElement;

	root.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};
