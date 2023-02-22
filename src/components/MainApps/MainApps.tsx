import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectLikeList } from "../../store/likeListSlice";
import { SteamApplicationInterface } from "../../types/fetchDataInterfaces";
import { filterApps } from "../../util/filterApps";
import { getNewId } from "../../util/getNewId";
import { StyledGrid } from "../styles/Grid.styled";
import { NoAppFound } from "../styles/NoAppFound.styled";
import MainApp from "./MainApp";
import RenderLoading from "./RenderLoading";

type MainAppsProps = {
	apps: SteamApplicationInterface[] | undefined;
};

const MainApps = ({ apps }: MainAppsProps) => {
	const [searchParams] = useSearchParams();
	const likeList = useAppSelector(selectLikeList);

	if (!apps || apps.length === 0) {
		return <RenderLoading />;
	}

	let filteredApps = filterApps(apps);

	const isLikeListParameter = searchParams.get("priority") === "like-list";

	if (isLikeListParameter) {
		filteredApps = filteredApps.filter(({ appId }) => likeList.includes(appId));
	}

	if (isLikeListParameter && filteredApps.length === 0) {
		return (
			<NoAppFound>
				<h2>No liked app in your search request ^_^</h2>
				<p>You can try to change searching parameters</p>
			</NoAppFound>
		);
	}

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
