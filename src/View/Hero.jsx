import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../Store/MovieStore';
import { useEffect } from 'react';

function Hero({ children }) {
	const state = useContext(MyContext);
	const { chosen_movie_hero } = state.data;
	const { set_chosen_movie_hero } = state.actions;
	const { backdrop_path } = chosen_movie_hero;
	useEffect(() => {
		// eslint-disable-next-line
		if (chosen_movie_hero) set_chosen_movie_hero(chosen_movie_hero);
		setTimeout(() => {
			console.clear();
		}, 200);
	}, []);
	return (
		<div className="HeroContainer">
			<StyledHero backdrop_path={backdrop_path}>{children}</StyledHero>
		</div>
	);
}

export default Hero;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledHero = styled.div`
	z-index: 1;
	overflow-x: hidden;
	width: 100vw;
	min-height: 700px;
	padding: 0;
	background-image: url("https://image.tmdb.org/t/p/original/${({ backdrop_path }) => backdrop_path}");
	background-size: cover;
	background-repeat: no-repeat;
	background-color: #464646;
	overflow-x: hidden;
	background-position: top center;
	animation: ${fadeIn} 3.2s;
	position: relative;
	transition: all .2s ease;
	color:white;
	  
	@media (max-width: 875px) {
		overflow-x: hidden;
		overflow-y: visible;
		background-image: url("https://image.tmdb.org/t/p/original/${({ backdrop_path }) => backdrop_path}");
	background-size: cover;
		// min-width: 130vw;
		
		`;
