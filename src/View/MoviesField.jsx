import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { MyContext } from '../Store/MovieStore';
let currentPageCounter = 1;
function MoviesField() {
	const state = useContext(MyContext);
	const { popular_movie_list, load_more } = state.data;
	const { set_popular_movie_list, set_chosen_movie_hero } = state.actions;
	useEffect(() => {
		getPopulerMovies();
		setInitialHeroToBeAvengers();
		// setInitialRandomHero();
		// eslint-disable-next-line
	}, []);

	async function getPopulerMovies(page = 1) {
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
		currentPageCounter++;
		getPopulerMovies(currentPageCounter);
	}

	return (
		<StyledMoviesField>
			{popular_movie_list.map((MovieInfo) => {
				return <MovieCard MovieInfo={MovieInfo} key={MovieInfo.id} />;
			})}

			{load_more === true ? (
				<LoadMoreBtn>
					<Btn onClick={LoadMoreMovies}>LOAD MORE</Btn>
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
	margin: 40px;

	// @media (max-width: 375px) {
	// margin-left: 15rem;
	// }
`;

const Btn = styled.button`
	width: 150px;
	height: 40px;
	border: none;
	color: white;
	font-size: 20px;
	cursor: pointer;
	background: #282c34;
	padding: 10px;
	border-radius: 5px;
	display:flex;
	justify-content: center;
	align-items: center;
	&:hover {
		box-shadow 2px 2px 6px 3px #ccc;
		background: navy;
		// transform: scale(1.01);
	}
	transition: all .9s;
`;
