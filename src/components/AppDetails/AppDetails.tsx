import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DetailedSteamApplicationInterface } from "../../types/fetchDataInterfaces";
import {
	AppDetailsInfo,
	AppDetailsPrice,
	AppDetailsImg,
	AppDetailsTags,
	AppDetailsTitle,
	AppDetailsBtn,
	StyledAppDetails,
} from "../styles/AppDetails.styled";

const AppDetails = () => {
	// const foundItem = useLoaderData() as DetailedSteamApplicationInterface;

	// console.log(data);
	const foundItem = {
		description:
			"A deadly virus plagues the city in Null County and the residents now roam the streets as flesh-eating zombies. Loot the apocalyptic open world and build a self-sustaining zombie-killing fortress. Will you survive the apocalypse or become one of the undead?",
		developer: {
			link: "https://store.steampowered.com/search/?developer=Tylario&snr=1_5_9__400",
			name: "Tylario",
		},
		title: "Dead Unending",
		tags: [],
		price: "",
		released: "20 Apr, 2023",
		imgUrl:
			"https://cdn.akamai.steamstatic.com/steam/apps/2236240/header.jpg?t=1675931619",
		publisher: {
			link: "https://store.steampowered.com/search/?publisher=Tylario%20Games&snr=1_5_9__422",
			name: "Tylario Games",
		},
	};

	const navigate = useNavigate();
	const gotoBackHandler = () => {
		navigate(-4);
	};

	return (
		<StyledAppDetails>
			<AppDetailsBtn onClick={gotoBackHandler}> Go back </AppDetailsBtn>
			<div className="item-details__header">
				<AppDetailsImg>
					<img src={foundItem?.imgUrl} alt="Game"></img>
				</AppDetailsImg>
				<AppDetailsInfo className="item-details__info">
					<AppDetailsTitle>{foundItem?.title}</AppDetailsTitle>
					<AppDetailsPrice>{foundItem?.price}</AppDetailsPrice>
					<p>{foundItem?.released}</p>
				</AppDetailsInfo>
			</div>

			<p>{foundItem?.description}</p>
			<AppDetailsTags>
				{foundItem?.tags.map((tag) => {
					return (
						<span key={Math.random()}>
							<h3>{/* <a href={tag.url}>{tag.name}</a> */}</h3>
						</span>
					);
				})}
			</AppDetailsTags>
		</StyledAppDetails>
	);
};

export default AppDetails;
