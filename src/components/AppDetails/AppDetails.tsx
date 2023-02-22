import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { DetailedSteamApplicationInterface } from "../../types/fetchDataInterfaces";
import { AppDetailsBtn, StyledAppDetails } from "../styles/AppDetails.styled";
import RenderDetails from "./RenderDetails";
import RenderNotFound from "./RenderNotFound";

const AppDetails = () => {
	const detailedItem =
		useLoaderData() as DetailedSteamApplicationInterface | null;

	console.log(detailedItem);
	const { pageId } = useParams();

	let isValid = pageId?.split("-")[0] !== "none";

	const navigate = useNavigate();
	const gotoBackHandler = () => {
		navigate(-4);
	};

	return (
		<StyledAppDetails>
			<AppDetailsBtn onClick={gotoBackHandler}> Go back </AppDetailsBtn>
			{(!isValid || !detailedItem) && <RenderNotFound />}
			{isValid && detailedItem && <RenderDetails foundItem={detailedItem} />}
		</StyledAppDetails>
	);
};

export default AppDetails;
