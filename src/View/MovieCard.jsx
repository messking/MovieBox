import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../Store/MovieStore';

function MovieCard({ MovieInfo }) {
	const state = useContext(MyContext);
	const { set_chosen_movie_hero } = state.actions;
	const { poster_path } = MovieInfo;
	return (
		<StyledMovieCard
			onClick={() => {
				set_chosen_movie_hero(MovieInfo);
				window.scrollTo(0, 0);
				window.scroll();
			}}
			poster_path={poster_path}
		/>
	);
}

export default MovieCard;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledMovieCard = styled.div`
	width: 200px;
	box-shadow 3px 3px 10px 6px #ccc;
	height: 300px;
	// border: 1px solid grey;
	border-radius: 5px;
	margin: 20px;
	position: relative;
	background-image: url("https://image.tmdb.org/t/p/original//${({ poster_path }) => poster_path}");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	cursor:pointer;
	&:hover{
		border:1px solid navy;
		transform: scale(1.05);
	
	}
animation: ${fadeIn} 2s;
	transition: all .5s ease;

	@media (max-width: 375px) {
		// margin-left: 2rem;
	}
`;
