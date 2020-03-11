import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { MyContext } from '../Store/MovieStore';
function MoviesField() {
	const state = useContext(MyContext);
	const { popular_movie_list, load_more, current_page } = state.data;
	const { set_popular_movie_list, set_chosen_movie_hero, set_current_page, set_is_loading } = state.actions;
	useEffect(() => {
		getPopulerMovies(1);
		setInitialHeroToBeAvengers();
		set_current_page(2);
		set_is_loading(false);
		// eslint-disable-next-line
	}, []);

	async function getPopulerMovies(page) {
		let movieList = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=d083014d3268dafcc42a2cd4008bb7d6&language=en-US&page=${page}`
		);
		let movieListJson = await movieList.json();
		let popularMoviesList = movieListJson.results;

		set_popular_movie_list([ ...popular_movie_list, ...popularMoviesList ]);
	}

	// async function setInitialRandomHero(page = 1) {
	// 	let movieList = await fetch(
	// 		`https://api.themoviedb.org/3/movie/popular?api_key=d083014d3268dafcc42a2cd4008bb7d6&language=en-US&page=${page}`
	// 	);
	// 	let movieListJson = await movieList.json();
	// 	let popularMoviesList = movieListJson.results;
	// 	set_chosen_movie_hero(popularMoviesList[Math.floor(Math.random() * (20 - 0)) + 0]);
	// }

	async function setInitialHeroToBeAvengers(page = 1) {
		let movieList = await fetch(
			`https://api.themoviedb.org/3/movie/299536?api_key=d083014d3268dafcc42a2cd4008bb7d6&language=en-US&page=1`
		);
		let movieListJson = await movieList.json();
		let popularMoviesList = movieListJson;
		set_chosen_movie_hero(popularMoviesList);
	}

	async function LoadMoreMovies(e) {
		set_current_page(current_page + 1);
		getPopulerMovies(current_page);
	}

	return (
		<StyledMoviesField>
			{popular_movie_list.map((MovieInfo) => {
				return <MovieCard MovieInfo={MovieInfo} key={MovieInfo.id} />;
			})}

			{load_more === true ? (
				<LoadMoreBtn>
					<Btn onClick={LoadMoreMovies}>
						<p>LOAD MORE</p>
					</Btn>
				</LoadMoreBtn>
			) : null}
		</StyledMoviesField>
	);
}

export default MoviesField;

const StyledMoviesField = styled.div`
	display: flex;
	width: 70vw;
	top: 2rem;
	position: relative;
	color: black;
	display: flex;
	flex-wrap: wrap;
	user-select: none;
	align-items: center;
	justify-content: center;
	text-size-adjust: 100%;
	overflow-x: hidden;
	margin: auto auto;
`;

const LoadMoreBtn = styled.div`
	display: flex;
	flex-basis: 100%;
	justify-content: center;
	align-items: center;
	// border: 5px solid red;
	margin: 40px;
`;

const Btn = styled.button`
	width: 30rem;
	height: 40px;
	border-radius: 90px / 90px;
	color: white;
	font-size: 20px;
	cursor: pointer;
	background: #282c34;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;

	p {
		position: relative;
		top: -3.5rem;
	}
	&:hover {
		// box-shadow 2px 2px 6px 3px #ccc;
		opacity: 0.8;
		// transform: scale(1.01);
	}
`;
