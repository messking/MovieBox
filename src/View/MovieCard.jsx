import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../Store/MovieStore';

function MovieCard({ MovieInfo }) {
	const state = useContext(MyContext);
	const { set_chosen_movie_hero } = state.actions;
	const { poster_path, title } = MovieInfo;
	return (
		<StyledMovieCard
			onClick={() => {
				set_chosen_movie_hero(MovieInfo);
				window.scrollTo(0, 0);
				window.scroll();
			}}
			poster_path={poster_path}
			title={title}
		>
			<div className="title">{title}</div>
		</StyledMovieCard>
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
	transition: filter .5s ease-in-out;
	-webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
	filter: grayscale(0%); /* FF 35+ */
	.title{
		 background-color:rgba(0,0,0,0.4);
		visibility: hidden;
		width:100%;
	}
	&:hover{
		.title{
			visibility: visible;
			animation: ${fadeIn} .4s ease;
		}
		transform: scale(1.05);	
		-webkit-filter: grayscale(60%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
		filter: grayscale(60%); /* FF 35+ */
		transition: all 0.5s ease;

		display: inline-block;
		color: white;
	}
	@media (max-width: 375px) {
		// margin-left: 2rem;
	}
`;
