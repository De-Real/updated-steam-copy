import { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import errorPicture from "../../assets/main-error.jpg";
import { StyledErrorWrapper } from "../styles/ErrorWrapper.styled";

type ErrorWrapperProps = {
	error: { message: string; title: string };
};

const ErrorWrapper = ({ error }: ErrorWrapperProps) => {
	const navigate = useNavigate();
	const { page } = useParams();
	const [shouldRedirect, setShouldRedirect] = useState(true);

	useEffect(() => setShouldRedirect(page !== "1"), [shouldRedirect, page]);

	const redirectUser = useCallback(() => {
		const searchParams = new URL(window.location.href).searchParams;

		if (shouldRedirect) {
			navigate(`/main/pages/1?${searchParams.toString()}`);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!shouldRedirect) return;

		const timeout = setTimeout(() => redirectUser(), 7500);

		return () => clearTimeout(timeout);
	}, [redirectUser, shouldRedirect]);

	const actionHint = shouldRedirect ? (
		<p> You will be redirected in 10 seconds</p>
	) : (
		<p> Please try to change search params</p>
	);

	return (
		<StyledErrorWrapper>
			<h2>{error.title}</h2>
			<p>{error.message}</p>
			{actionHint}
			<img src={errorPicture} alt="Error"></img>
		</StyledErrorWrapper>
	);
};

export default ErrorWrapper;
