import styled from "styled-components";

export const StyledLinearBox = styled.div`
	color: #837f7f;
	padding-bottom: 15px;
	position: sticky;
	top: -35px;
	left: 0;
	z-index: 15;

	@media (max-width: 768px) {
		padding: 15px 0;
		top: -50px;
	}

	& > p {
		width: 100%;
		height: 4px;
		z-index: 1000;
	}
`;
