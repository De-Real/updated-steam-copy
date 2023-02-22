import { useEffect } from "react";
import { json, LoaderFunctionArgs } from "react-router-dom";
import { options } from "../api/options";
import AppDetails from "../components/AppDetails/AppDetails";
import { scrollTop } from "../util/scrollTop";

const DetailedApp = () => {
	useEffect(() => scrollTop(), []);
	return <AppDetails />;
};

export default DetailedApp;

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const { pageId } = params;

	//If app without ID we won't fetch any data
	if (!pageId || pageId?.split("-")[0] === "none" || isNaN(parseInt(pageId))) {
		return null;
	}

	const response = await fetch(
		`https://steam2.p.rapidapi.com/appDetail/${pageId}`,
		options
	);

	if (!response.ok)
		throw json(
			{ message: "Can not fetch app details." },
			{ status: response.status, statusText: response.statusText }
		);

	return response;
};
