import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type PropsType = {
	onHandleClick: () => void;
	onHandleClose: () => void;
	open: boolean;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
	onHandleClick: handleClick,
	onHandleClose: handleClose,
	open,
}: PropsType) {
	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
				You reached the limit of liked apps!
			</Alert>
		</Snackbar>
		// <Stack spacing={2} sx={{ width: "100%" }}>
		// {/* <Button variant="outlined" onClick={handleClick}>
		// 	Open success snackbar
		// </Button> */}

		// </Stack>
	);
}
