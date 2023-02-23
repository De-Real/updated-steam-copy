import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

import HeaderLogo from "../components/Header/HeaderLogo";
import { NotFoundWrapper } from "./styles/NotFound.styled";

const NotFound = () => {
	const error = useRouteError() as {
		data?: { message: string };
		status?: number;
		statusText: string;
	};

	console.log(error);

	let errorReason = "Something went wrong!";

	if (error.data && error.data.message) {
		errorReason = error.data.message;
	} else if (error.status === 500) {
		errorReason = "No data on your search parameters request found!";
	} else {
		errorReason = error.statusText;
	}

	return (
		<main>
			<NotFoundWrapper>
				<HeaderLogo />
				<h2> Whoops!</h2>
				<p> {errorReason || "Something went wrong"} </p>
				<div>
					<p> If error persist</p>
					<p> Please contact us: test.steam@test.steam.org</p>
				</div>

				<Link to="/main/pages/1"> Back to main </Link>
			</NotFoundWrapper>
		</main>
	);
};

export default NotFound;
