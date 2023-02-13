import React from "react";
import { useParams } from "react-router-dom";

const Main = () => {
	const { page } = useParams();

	return <div>Main: {page}</div>;
};

export default Main;
