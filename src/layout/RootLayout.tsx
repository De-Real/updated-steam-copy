import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";

const RootLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Pagination
			/>
		</>
	);
};

export default RootLayout;
