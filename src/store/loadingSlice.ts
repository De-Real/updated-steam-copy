import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

// Define a type for the slice state
interface LoadingState {
	isLoading: boolean;
}

// Define the initial state using that type
const initialState: LoadingState = {
	isLoading: false,
};

const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setIsLoading } = loadingSlice.actions;

export const loading = (state: RootState) => state.loading.isLoading;

export default loadingSlice.reducer;
