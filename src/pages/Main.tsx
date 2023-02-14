import React from "react";
import {
	JsonFunction,
	LoaderFunctionArgs,
	useLoaderData,
	useParams,
} from "react-router-dom";
import { json } from "stream/consumers";
import { options } from "../api/options";
import MainApps from "../components/MainApps/MainApps";

import { SteamApplicationInterface } from "../types/fetchDataInterfaces";
import { getNewId } from "../util/getNewId";

const DUMMY_DATA = [
	{
		appId: "730",
		title: "Counter-Strike: Global Offensive",
		url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812",
		released: "21 Aug, 2012",
		reviewSummary:
			"Very Positive<br>88% of the 6,934,420 user reviews for this game are positive.",
		price: "                        Free to Play                    ",
	},
	{
		appId: "732",
		title: "Counter-Strike: Global Offensive 1",
		url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812",
		released: "21 Aug, 2012",
		reviewSummary:
			"Very Positive<br>88% of the 6,934,420 user reviews for this game are positive.",
		price: "                        Free to Play                    ",
	},
	{
		appId: "731",
		title: "Counter-Strike: Global Offensive 2",
		url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812",
		released: "21 Aug, 2012",
		reviewSummary:
			"Very Positive<br>88% of the 6,934,420 user reviews for this game are positive.",
		price: "                        Free to Play                    ",
	},
	{
		appId: "1976440",
		title: "CounterSide",
		url: "https://store.steampowered.com/app/1976440/CounterSide/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/1976440/capsule_sm_120.jpg?t=1675865874",
		released: "1 Sep, 2022",
		reviewSummary:
			"Mostly Positive<br>71% of the 1,977 user reviews for this game are positive.",
		price: "                        Free To Play                    ",
	},
];

const Main = () => {
	const { page } = useParams();
	const applications = useLoaderData() as SteamApplicationInterface[];

	return <MainApps apps={DUMMY_DATA} />;
};

export default Main;

export const loader = async ({ params }: LoaderFunctionArgs) => {
	console.log(params.page);
	// const response = await fetch(
	// 	`https://steam2.p.rapidapi.com/search/Counter/page/${params.page}`,
	// 	options
	// );

	const response = await fetch("https://jsonplaceholder.typicode.com/todos");

	console.log(response);

	if (!response.ok) {
		console.log(response);
		throw new Error("Something went wrong");
	}

	return response;
};
