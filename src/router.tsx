import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./layout/NotFound";

import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Navigate to="main" /> },
			{ path: "main", element: <div> Main </div> },
		],
	},
]);
