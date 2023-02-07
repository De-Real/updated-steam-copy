import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Navigate to="main" /> },
			{ path: "main", element: <div> Main </div> },
		],
	},
]);
