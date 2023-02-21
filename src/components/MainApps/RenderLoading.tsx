import React from "react";
import { StyledGrid } from "../styles/Grid.styled";
import SkeletonLoading from "../UI/SkeletonLoading";

const RenderLoading = () => {
	const skeletonArray = new Array(25).fill(0).map((_, index) => {
		return <SkeletonLoading key={index} />;
	});

	return (
		<StyledGrid container spacing={2}>
			{skeletonArray}
		</StyledGrid>
	);
};

export default RenderLoading;
