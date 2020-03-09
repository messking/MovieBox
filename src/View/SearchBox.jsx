import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../Store/MovieStore';

function SearchBox() {
	const state = useContext(MyContext);
	const { set_popular_movie_list, set_load_more } = state.actions;
	const inputEL = useRef('a');
	async function findByInputValue(keyword) {
		if (keyword !== '' && keyword !== '') {
			set_load_more(false);
			const moviesresponse = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=d083014d3268dafcc42a2cd4008bb7d6&language=en-US&query=${keyword}&page=1&include_adult=false`
			);
			const moviesjson = await moviesresponse.json();
			set_popular_movie_list(moviesjson.results);
		}
	}

	const searchByValue = (e) => {
		const value = inputEL.current.value;
		if (value !== '' && value !== ' ') {
			findByInputValue(value);
			set_load_more(false);
		} else {
			set_load_more(true);
		}
	};
	return (
		<header className="Searchbox">
			<StyledSearchBox>
				<FloatSearchFA>
					<i class="fa fa-search" aria-hidden="true" />
				</FloatSearchFA>
				<StyledInput type="text" placeholder="Search" ref={inputEL} onChange={searchByValue} />
			</StyledSearchBox>
		</header>
	);
}

export default SearchBox;

const StyledSearchBox = styled.div`
	display: flex;
	height: 8.5rem;
	align-items: center;
	justify-content: center;
	@media (max-width: 375px) {
		max-width: 100%;
		// border: 5px solid pink;
		margin: auto;
	}
`;
const StyledInput = styled.input`
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	width: 60rem;
	height: 5rem;
	background: #1c1c1c;
	align-items: center;
	color: silver;
	font-size: 2.5rem;
	border: none;
	border-radius: 90px / 90px;
	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.25);
	}
	transition: all .5s;
	@media (max-width: 875px) {
		max-width: 25rem;
		// border: 5px solid red;
		padding: 0 2rem;
		position: relative;
		left: -1.5rem;
	}
`;

const FloatSearchFA = styled.div`
	position: relative;
	z-index: 1;
	top: 0rem;
	right: -62.5rem;
	@media (max-width: 875px) {
		top: 0.1rem;
		left: 26.5rem;
	}
`;
