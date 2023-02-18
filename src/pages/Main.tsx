import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { json } from "stream/consumers";
import { options } from "../api/options";
import MainApps from "../components/MainApps/MainApps";
import ErrorWrapper from "../components/UI/ErrorWrapper";
import Loading from "../components/UI/Loading";
import useFetch from "../hooks/useFetch";

import { SteamApplicationInterface } from "../types/fetchDataInterfaces";

const DUMMY_DATA = [
	{
		appId: "730",
		title: "Counter-Strike: Global Offensive",
		url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812",
		released: "20 Aug, 2011",
		reviewSummary:
			"Very Positive<br>88% of the 6,934,420 user reviews for this game are positive.",
		price: "15.49",
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
		price: "49.99",
	},
	{
		appId: "731",
		title: "Counter-Strike: Global Offensive 2",
		url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812",
		released: "22 Aug, 2009",
		reviewSummary:
			"Very Positive<br>88% of the 6,934,420 user reviews for this game are positive.",
		price: "Free to Play",
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
		price: "5.49",
	},
	{
		appId: "197644023",
		title: "CounterSide",
		url: "https://store.steampowered.com/app/1976440/CounterSide/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/1976440/capsule_sm_120.jpg?t=1675865874",
		released: "22 Oct, 2015",
		reviewSummary:
			"Mostly Positive<br>71% of the 1,977 user reviews for this game are positive.",
		price: "49.15",
	},
	{
		appId: "19764401221",
		title: "CounterSide",
		url: "https://store.steampowered.com/app/1976440/CounterSide/?snr=1_7_7_151_150_1",
		imgUrl:
			"https://cdn.cloudflare.steamstatic.com/steam/apps/1976440/capsule_sm_120.jpg?t=1675865874",
		released: "11 Sep, 2020",
		reviewSummary:
			"Mostly Positive<br>71% of the 1,977 user reviews for this game are positive.",
		price: "15.49",
	},
];

const Main = () => {
	const { page } = useParams();
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("search");

	const [apps, setApps] = useState<SteamApplicationInterface[]>([]);
	const { data, error } = useFetch<SteamApplicationInterface[]>(
		`https://steam2.p.rapidapi.com/search/${searchParam}/page/${page}`,
		options
	);

	console.log(data, error);

	// useEffect(() => {
	// 	const fetchApps = async () => {
	// 		const response = await fetch(
	// 			`https://steam2.p.rapidapi.com/search/${searchParam}/page/${page}`,
	// 			options
	// 		);
	// 		if (!response.ok) {
	// 			throw new Error("Error");
	// 		}

	// 		const results = await response.json();
	// 		setApps(results);
	// 	};

	// 	// fetchApps();
	// }, [searchParam, page]);

	if (error) {
		if (error.message === "No data fetched.") {
			return (
				<ErrorWrapper
					error={{ title: "Error occured!", message: "No data found." }}
				/>
			);
		} else {
			throw new Error(error.message);
		}
	}

	if (!data || (data.length === 0 && !error)) {
		return <Loading />;
	}

	return <MainApps apps={data} />;
};

export default Main;
