import { SteamApplicationInterface } from "../../types/fetchDataInterfaces";
import { filterApps } from "../../util/filterApps";
import { getNewId } from "../../util/getNewId";
import { StyledGrid } from "../styles/Grid.styled";
import MainApp from "./MainApp";

const MainApps = ({ apps }: { apps: SteamApplicationInterface[] }) => {
	const filteredApps = filterApps(apps);

	return (
		<div>	
			<StyledGrid container spacing={2}>
				{filteredApps.map((app) => {
					return <MainApp key={app.appId || getNewId()} app={app} />;
				})}
			</StyledGrid>
		</div>
	);
};

export default MainApps;
