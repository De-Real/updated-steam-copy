import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { json } from "stream/consumers";
import { options } from "../api/options";
import MainApps from "../components/MainApps/MainApps";
import ErrorWrapper from "../components/UI/ErrorWrapper";
import Loading from "../components/UI/Loading";
import useFetch from "../hooks/useFetch";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { SteamApplicationInterface } from "../types/fetchDataInterfaces";
import LinearLoading from "../components/UI/LinearLoading";
import SkeletonLoading from "../components/UI/SkeletonLoading";

const Main = () => {
	const { page } = useParams();
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("search") || "Counter";

	const { data, error } = useFetch<SteamApplicationInterface[]>(
		`https://steam2.p.rapidapi.com/search/${searchParam}/page/${page || 1}`,
		options
	);

	if (error) {
		if (error.message === "No data fetched.") {
			return (
				<ErrorWrapper
					error={{ title: "Error occured!", message: "No data found." }}
				/>
			);
		} else {
			throw new Error(error.message);
		}
	}

	return (
		<>
			<LinearLoading />
			<MainApps apps={data} />
		</>
	);
};

export default Main;
