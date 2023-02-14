import { Grid } from "@mui/material";
import React from "react";
import { SteamApplicationInterface } from "../../types/fetchDataInterfaces";
import {
	AppItemInfo,
	AppItemPicture,
	AppItemTitle,
	AppItemDate,
	AppItemPrice,
	AppItemPlay,
	AppItemControl,
	StyledAppItem,
	AppItemLike,
} from "../styles/MainApp.styled";

import playButton from "../../assets/play-button.svg";
import iconLiked from "../../assets/icon-liked.svg";
import iconUnliked from "../../assets/icon-unliked.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	addLikedApp,
	removeLikedApp,
	selectLikeList,
} from "../../store/likeListSlice";

const MainApp = ({ app }: { app: SteamApplicationInterface }) => {
	const { imgUrl, title, released, price, url, appId } = app;

	const dispatch = useAppDispatch();

	const likeList = useAppSelector(selectLikeList);

	let isLiked = false;

	if (likeList.includes(appId)) {
		isLiked = true;
	}

	const setLikeStatus = () => {
		if (isLiked) {
			dispatch(removeLikedApp(appId));
		} else {
			dispatch(addLikedApp(appId));
		}
	};

	return (
		<Grid lg={3} md={4} sm={6} xs={12} item>
			<StyledAppItem>
				<AppItemPicture>
					<img src={imgUrl} alt={title} />
				</AppItemPicture>
				<AppItemInfo>
					<AppItemTitle>{title} </AppItemTitle>
					<AppItemDate>{released}</AppItemDate>
					<AppItemControl>
						<AppItemPrice>{price}</AppItemPrice>
						<AppItemLike onClick={setLikeStatus}>
							<img
								src={isLiked ? iconLiked : iconUnliked}
								alt={`${isLiked ? "Unliked" : "Unliked"} icon`}
							/>
						</AppItemLike>
					</AppItemControl>
				</AppItemInfo>
				{isLiked && (
					<AppItemPlay href={url}>
						<img src={playButton} alt="Play game"></img>
					</AppItemPlay>
				)}
			</StyledAppItem>
		</Grid>
	);
};

export default MainApp;
