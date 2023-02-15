import { SteamApplicationInterface } from "../types/fetchDataInterfaces";

type sortFilterType = "bigger-to-lower" | "lower-to-bigger";
type parameterFilterType = "price" | "publish-date";

type filterObjType = {
	sort: sortFilterType;
	parameter: parameterFilterType;
};

export const filterApps = (appsArray: SteamApplicationInterface[]) => {
	const searchParams = new URL(window.location.href).searchParams;

	const filterParameters: filterObjType = {
		sort: "bigger-to-lower",
		parameter: "price",
	};

	if (searchParams.has("sort")) {
		const sortParameter = searchParams.get("sort");

		if (
			sortParameter === "bigger-to-lower" ||
			sortParameter === "lower-to-bigger"
		) {
			filterParameters.sort = sortParameter;
		} else {
			filterParameters.sort = "bigger-to-lower"; //Value by default
		}
	}

	if (searchParams.has("parameter")) {
		const parameter = searchParams.get("parameter");

		if (parameter === "price" || parameter === "publish-date") {
			filterParameters.parameter = parameter;
		} else {
			filterParameters.parameter = "price"; //Value by default
		}
	}

	console.log("CALLED", filterParameters);

	if (filterParameters.sort === "bigger-to-lower") {
		if (filterParameters.parameter === "price") {
			return appsArray.sort((a, b) => {
				const priceOne = parseFloat(a.price || "");
				const priceTwo = parseFloat(b.price || "");
				if (isNaN(priceOne)) {
					return 1;
				}
				if (isNaN(priceTwo)) {
					return -1;
				}
				return priceTwo - priceOne;
			});
		} else {
			return appsArray.sort((a, b) => {
				const dateOne = Date.parse(a.released);
				const dateTwo = Date.parse(b.released);
				if (isNaN(dateOne)) {
					return 1;
				}
				if (isNaN(dateTwo)) {
					return -1;
				}
				return dateTwo - dateOne;
			});
		}
	} else {
		if (filterParameters.parameter === "price") {
			return appsArray.sort((a, b) => {
				const priceOne = parseFloat(a.price || "");
				const priceTwo = parseFloat(b.price || "");
				if (isNaN(priceOne)) {
					return -1;
				}
				if (isNaN(priceTwo)) {
					return 1;
				}
				return priceOne - priceTwo;
			});
		} else {
			return appsArray.sort((a, b) => {
				const dateOne = Date.parse(a.released);
				const dateTwo = Date.parse(b.released);
				if (isNaN(dateOne)) {
					return -1;
				}
				if (isNaN(dateTwo)) {
					return 1;
				}
				return dateOne - dateTwo;
			});
		}
	}
};
