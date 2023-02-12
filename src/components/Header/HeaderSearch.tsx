import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import searchIcon from "../../assets/icon-search.svg";
import { getAllSearchParams } from "../../util/getAllSearchParams";
import { StyledForm } from "../styles/HeaderSearch.styled";

const QUERY_PARAMETER = "search";

const HeaderSearch = () => {
	const ref = useRef<HTMLInputElement>(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (ref.current) {
			const inputValue = ref.current.value;

			if (!inputValue && searchParams.has(QUERY_PARAMETER)) {
				searchParams.delete(QUERY_PARAMETER);
			} else if (!inputValue) {
				return;
			} else if (!searchParams.has(QUERY_PARAMETER)) {
				searchParams.append(QUERY_PARAMETER, inputValue);
			} else {
				searchParams.set(QUERY_PARAMETER, inputValue);
			}

			setSearchParams(searchParams);
		}
	};

	return (
		<StyledForm onSubmit={submitHandler}>
			<input
				ref={ref}
				type="text"
				placeholder="Enter an app name..."
				id="header-search-input"
				defaultValue={searchParams.get("search") || undefined}
			/>
			<label htmlFor="header-search-input">
				<button>
					<img src={searchIcon} alt="Search icon" />
				</button>
			</label>
		</StyledForm>
	);
};

export default HeaderSearch;
