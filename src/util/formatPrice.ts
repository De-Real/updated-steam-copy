export const formatPrice = (price: string) => {
	const parsedPrice = parseFloat(price.replace(",", "."));
	if (isNaN(parsedPrice)) {
		return price || "Unprovided price";
	}
	return parsedPrice + "€";
};
