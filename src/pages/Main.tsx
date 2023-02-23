import { json, useParams, useSearchParams } from "react-router-dom";
import { options } from "../api/options";
import MainApps from "../components/MainApps/MainApps";
import ErrorWrapper from "../components/UI/ErrorWrapper";
import useFetch from "../hooks/useFetch";
import { SteamApplicationInterface } from "../types/fetchDataInterfaces";
import LinearLoading from "../components/UI/LinearLoading";

const Main = () => {
	const { page } = useParams();
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("search") || "Counter";

	const { data, error } = useFetch<SteamApplicationInterface[]>(
		`https://steam2.p.rapidapi.com/search/${searchParam}/page/${page}`,
		options
	);

	if (error) {
		if (error.message === "No data") {
			return (
				<ErrorWrapper
					error={{ title: "Something went wrong!", message: "No data found." }}
				/>
			);
		} else {
			throw json({}, { statusText: error.message });
		}
	}

	return (
		<>
			<LinearLoading />
			<MainApps apps={data} />
		</>
	);
};

export default Main;
