import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import { SteamApplicationInterface } from "../../types/fetchDataInterfaces";
import { getNewId } from "../../util/getNewId";
import MainApp from "./MainApp";

const StyledGrid = styled(Grid)`
	padding: 0 50px;
	@media (max-width: 980px) {
		padding: 0 25px;
	}
	@media (max-width: 760px) {
		padding: 0 15px;
	}
	@media (max-width: 420px) {
		padding: 0;
	}
`;

const MainApps = ({ apps }: { apps: SteamApplicationInterface[] }) => {
	return (
		<div>
			<StyledGrid container spacing={2}>
				{apps.map((app) => {
					return <MainApp key={app.appId || getNewId()} app={app} />;
				})}
			</StyledGrid>
		</div>
	);
};

export default MainApps;
