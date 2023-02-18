import React from "react";

import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
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
import Loading from "../UI/Loading";

const AppDetails = () => {
	const foundItem = useLoaderData() as DetailedSteamApplicationInterface;

	console.log(foundItem);

	const navigate = useNavigate();
	const gotoBackHandler = () => {
		navigate(-4);
	};

	const navigation = useNavigation();

	if (!foundItem) {
		console.log("LOADING", navigation.state);
		return <Loading />;
	}

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
				{foundItem?.tags?.map((tag) => {
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
