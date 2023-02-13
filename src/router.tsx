import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./layout/NotFound";

import RootLayout from "./layout/RootLayout";
import Main from "./pages/Main";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Navigate to="main/pages/1" /> },
			{
				path: "main",
				children: [
					{ index: true, element: <Navigate to="main/pages/1" /> },
					{ path: "pages", element: <Navigate to="main/pages/1" /> },
					{ path: "pages/:page", element: <Main /> },
				],
			},
		],
	},
]);
