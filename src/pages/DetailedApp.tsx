import axios from "axios";
import React from "react";
import { LoaderFunctionArgs } from "react-router-dom";
import { options } from "../api/options";
import AppDetails from "../components/AppDetails/AppDetails";

const DetailedApp = () => {
	return <AppDetails></AppDetails>;
};

export default DetailedApp;

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
	const { pageId } = params;

	const response = await fetch(
		`https://steam2.p.rapidapi.com/appDetail/${pageId}`,
		options
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response;

	// const foundItem = {
	// 	description:
	// 		"A deadly virus plagues the city in Null County and the residents now roam the streets as flesh-eating zombies. Loot the apocalyptic open world and build a self-sustaining zombie-killing fortress. Will you survive the apocalypse or become one of the undead?",
	// 	developer: {
	// 		link: "https://store.steampowered.com/search/?developer=Tylario&snr=1_5_9__400",
	// 		name: "Tylario",
	// 	},
	// 	title: "Dead Unending",
	// 	tags: [],
	// 	price: "",
	// 	released: "20 Apr, 2023",
	// 	imgUrl:
	// 		"https://cdn.akamai.steamstatic.com/steam/apps/2236240/header.jpg?t=1675931619",
	// 	publisher: {
	// 		link: "https://store.steampowered.com/search/?publisher=Tylario%20Games&snr=1_5_9__422",
	// 		name: "Tylario Games",
	// 	},
	// };

	// return foundItem;
};
