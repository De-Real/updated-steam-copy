import { Grid } from "@mui/material";
import React, { useState } from "react";
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
import CustomizedSnackbars from "../UI/Alert";

const formatPrice = (price: string) => {
	const parsedPrice = parseFloat(price.replace(",", "."));
	console.log(price, parsedPrice);
	if (isNaN(parsedPrice)) {
		return price || "Unprovided price";
	}
	return parsedPrice + "€";
};

const MainApp = ({ app }: { app: SteamApplicationInterface }) => {
	const { imgUrl, title, released, price, url, appId } = app;
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	// const handleClose = (
	// 	event?: React.SyntheticEvent | Event,
	// 	reason?: string
	// ) => {
	// 	if (reason === "clickaway") {
	// 		return;
	// 	}

	// 	setOpen(false);
	// };

	const handleClose = () => {};

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
			if (likeList.length <= 4) {
				dispatch(addLikedApp(appId));
				console.log(likeList.length);
			} else {
				handleClick();
			}
		}
	};

	return (
		<>
			<CustomizedSnackbars
				onHandleClick={handleClick}
				onHandleClose={handleClose}
				open={open}
			/>
			<Grid lg={3} md={4} sm={6} xs={12} item>
				<StyledAppItem>
					<AppItemPicture>
						<img src={imgUrl} alt={title} />
					</AppItemPicture>
					<AppItemInfo>
						<AppItemTitle>
							{title || "Unprovided title of the app"}{" "}
						</AppItemTitle>
						<AppItemDate>
							{released || "Release date was not provided"}
						</AppItemDate>
						<AppItemControl>
							<AppItemPrice>{formatPrice(price.trim() || "")}</AppItemPrice>
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
		</>
	);
};

export default MainApp;
