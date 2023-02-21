import LinearProgress from "@mui/material/LinearProgress";
import { useNavigation } from "react-router-dom";
import { StyledLinearBox } from "../styles/LinearLoading.styled";

function LinearLoading() {
	const navigation = useNavigation();

	const isLoading = navigation.state === "loading";

	return (
		<StyledLinearBox>
			{!isLoading && <p></p>}
			{isLoading && <LinearProgress color="inherit" />}
		</StyledLinearBox>
	);
}

export default LinearLoading;
