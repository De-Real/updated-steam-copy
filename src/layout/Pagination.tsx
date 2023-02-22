import React, { useEffect, useState, useCallback } from "react";
import leftArrowIcon from "../assets/icon-pagination-arrow-left.svg";
import rightArrowIcon from "../assets/icon-pagination-arrow-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
	PaginationArrow,
	PaginationNumber,
	StyledPagination,
} from "./styles/Pagination.styled";
import { scrollTop } from "../util/scrollTop";

const ARR_LENGTH = 20;

const Pagination = () => {
	const { page } = useParams();

	const numberPage = page ? +page : undefined;

	const [currentSlice, setCurrentSlice] = useState(1);

	//First loading state
	const [isForced, setIsForced] = useState(true);

	const navigate = useNavigate();

	const paginate = useCallback((pageNumber: number) => {
		const searchParams = window.location.href.split("?")[1];

		let url = `/main/pages/${pageNumber}`;

		if (searchParams) {
			url += `?${searchParams}`;
		}

		scrollTop();
		navigate(url);

		//We skip here deps warning because 'navigate' will cause updates and bugs
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const pageNumbers = Array.from({ length: ARR_LENGTH }, (_, i) => i + 1);

	const { length: pageNumberLength } = pageNumbers;

	//First loading data provider
	useEffect(() => {
		if (!numberPage) {
			return;
		}

		//If page in url is bigger than max possible page
		if (numberPage > pageNumberLength) {
			setCurrentSlice(0);
			paginate(1);
			return;
		}

		//If it is not first render, return;
		if (!isForced) return;

		//If current page during first render is two less or equals to max page
		if (numberPage + 3 > pageNumberLength) {
			setCurrentSlice(ARR_LENGTH - 3);
		} else {
			setCurrentSlice(numberPage - 1);
			//Show that first render ended;
			setIsForced(false);
		}
	}, [numberPage, isForced, pageNumberLength, paginate]);

	useEffect(() => {
		if (!isForced) {
			paginate(currentSlice + 1);
		}
	}, [currentSlice, paginate, isForced]);

	const previousPage = () => {
		setCurrentSlice((curState) => {
			const min = curState - 3;
			return min < 0 ? 0 : min;
		});
	};

	const nextPage = () => {
		setCurrentSlice((curState) => {
			const maxArrayLenght = pageNumbers.length - 3;
			const min = curState + 3;
			return min > maxArrayLenght ? maxArrayLenght : min;
		});
	};

	const slicedPageNumbers = pageNumbers.slice(currentSlice, currentSlice + 3);

	return (
		<div>
			<StyledPagination>
				<PaginationArrow onClick={previousPage}>
					<img src={leftArrowIcon} alt="Left arrow"></img>
				</PaginationArrow>

				{slicedPageNumbers.map((number) => {
					const isChoosen = Number(page) === number ? true : false;
					return (
						<PaginationNumber
							key={number}
							onClick={() => paginate(number)}
							choosen={isChoosen}
						>
							{number}
						</PaginationNumber>
					);
				})}

				<PaginationArrow onClick={nextPage}>
					<img src={rightArrowIcon} alt="Right arrow" />
				</PaginationArrow>
			</StyledPagination>
		</div>
	);
};

export default React.memo(Pagination);
