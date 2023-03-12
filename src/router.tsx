import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

const NotFound = lazy(() => import("./layout/NotFound"));
const Main = lazy(() => import("./pages/Main"));
const DetailedApp = lazy(() => import("./pages/DetailedApp"));

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <RootLayout />,
			errorElement: (
				<Suspense fallback={<div>Loading...</div>}>
					<NotFound />
				</Suspense>
			),
			children: [
				{ index: true, element: <Navigate to="main/pages/1" /> },
				{
					path: "main",
					children: [
						{ index: true, element: <Navigate to="main/pages/1" /> },
						{ path: "pages", element: <Navigate to="main/pages/1" /> },
						{
							path: "pages/:page",
							element: (
								<Suspense fallback={<div> Loading...</div>}>
									<Main />
								</Suspense>
							),
						},
						{
							path: "pages/:page/detailed/",
							element: <Navigate to="/main/pages/1" />,
						},
						{
							path: "pages/:page/detailed/:pageId",
							loader: (meta) =>
								import("./pages/DetailedApp").then((module) =>
									module.loader(meta)
								),
							element: (
								<Suspense fallback={<div> Loading...</div>}>
									<DetailedApp />
								</Suspense>
							),
						},
					],
				},
			],
		},
	],
	{ basename: "/updated-steam-copy" }
);
