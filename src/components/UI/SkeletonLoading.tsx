import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const SkeletonLoading = () => {
	return (
		<Grid lg={3} md={4} sm={6} xs={12} item>
			<Skeleton
				sx={{ backgroundColor: "#303030" }}
				variant="rounded"
				width="100%"
				height={230}
			/>
		</Grid>
	);
};

export default SkeletonLoading;
