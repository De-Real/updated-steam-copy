import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import likeListReducer from "./likeListSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
	reducer: {
		liked: likeListReducer,
		loading: loadingReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
