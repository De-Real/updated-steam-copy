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
} from "../styles/MainApp.styled";

import playButton from "../../assets/play-button.svg";
import iconLiked from "../../assets/icon-liked.svg";
import iconUnliked from "../../assets/icon-unliked.svg";

const MainApp = ({ app }: { app: SteamApplicationInterface }) => {
	const { imgUrl, title, released, price, url } = app;

	const isLiked = false;

	return (
		<Grid lg={3} md={4} sm={6} xs={12} item>
			<StyledAppItem>
				<div>
					<AppItemPicture>
						<img src={imgUrl} alt={title} />
					</AppItemPicture>
					<AppItemInfo>
						<AppItemTitle>{title} </AppItemTitle>
						<AppItemDate>{released}</AppItemDate>
						<AppItemControl>
							<AppItemPrice>{price}</AppItemPrice>
							<p className="main-item__like">
								<img
									src={isLiked ? iconLiked : iconUnliked}
									alt={`${isLiked ? "Unliked" : "Unliked"} icon`}
								/>
							</p>
						</AppItemControl>
					</AppItemInfo>
					{isLiked && (
						<AppItemPlay href={url}>
							<img src={playButton} alt="Play game"></img>
						</AppItemPlay>
					)}
				</div>
			</StyledAppItem>
		</Grid>
	);
};

export default MainApp;
