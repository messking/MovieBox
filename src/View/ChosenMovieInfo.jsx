import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../Store/MovieStore';
import StarRatings from 'react-star-ratings';
import TrailerCard from './ChosenMovieTrailer';
var moment = require('moment');
var commaNumber = require('comma-number');
moment().format();

function ChosenMovieInfo({ url_id, history }) {
	const state = useContext(MyContext);
	const { chosen_movie_hero } = state.data;
	const { set_chosen_movie_hero } = state.actions;
	let {
		title,
		overview,
		id,
		release_date,
		vote_average,
		poster_path,
		runtime,
		revenue,
		budget,
		tagline
	} = chosen_movie_hero;
	let newSent = overview;
	if (overview !== undefined) {
		newSent = `${overview.substr(0, 220)}...`;
	}
	const [ movie_video, set_movie_video ] = useState([]);
	useEffect(
		() => {
			getMovieInfoByID(url_id);
			getMovieVideosById(url_id);
			window.scrollTo(0, 0);
		},
		// eslint-disable-next-line
		[ url_id ]
	);

	async function getMovieInfoByID(id) {
		let movieInfo = await fetch(
			`https://api.themoviedb.org/3/movie/${Number(id)}?api_key=d083014d3268dafcc42a2cd4008bb7d6&language=en-US`
		);
		let movieInfoById = await movieInfo.json();
		set_chosen_movie_hero(movieInfoById);
	}

	async function getMovieVideosById(id) {
		let movieInfo = await fetch(
			`https://api.themoviedb.org/3/movie/${Number(id)}/videos?api_key=d083014d3268dafcc42a2cd4008bb7d6`
		);
		let movieInfoById = await movieInfo.json();
		movieInfoById.results[0] ? set_movie_video(movieInfoById.results[0]) : set_movie_video('null');
	}
	return (
		<StyledChosenMovieInfoInformation>
			<StyledHeroFacts>
				<StyledHeroFact>
					<h3>Release Date:</h3>
					{release_date}
				</StyledHeroFact>
				<StyledHeroFact>
					<h3> Revenue:</h3> ${commaNumber(revenue)}
				</StyledHeroFact>
				<StyledHeroFact>
					<h3>Runtime:</h3> {runtime} minutes
				</StyledHeroFact>
				<StyledHeroFact>
					<h3>Budget:</h3> $
					{commaNumber(budget)}
				</StyledHeroFact>
			</StyledHeroFacts>
			<StyledInfo>
				<p>
					<h2>
						{title} ({moment(release_date).format('YYYY')})
					</h2>
					<h5>{tagline}</h5>
					<StarRatings
						rating={vote_average}
						numberOfStars={10}
						starRatedColor="yellow"
						starDimension="20px"
						starSpacing="0px"
					/>
					<p>{newSent}</p>
				</p>
				<ImageWrapper poster_path={poster_path} />
			</StyledInfo>
			<ButtonsWrapper>
				<Btn
					onClick={() => {
						history.push('/');
					}}
				>
					<i class="fas fa-arrow-left fa-2x" />
				</Btn>
				<Btn
					onClick={() => {
						if (!Object.keys(localStorage).includes(id.toString())) {
							localStorage.setItem(`${id}`, JSON.stringify(chosen_movie_hero));
						}
					}}
				>
					<i class="fas fa-star fa-2x" />
				</Btn>
			</ButtonsWrapper>
			<TrailerCard movie_video={movie_video} set_movie_video={set_movie_video} />
		</StyledChosenMovieInfoInformation>
	);
}

export default ChosenMovieInfo;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledChosenMovieInfoInformation = styled.div`
	color: white;
	text-align: left;
	position: absolute;
	left: calc(50% - 46rem);
	font-size: 1.6rem;
	top: 14rem;
	flex-wrap: wrap;
    flex-direction: column;
	z-index: 2;
    padding: 1.5rem;
    display:flex;
    justify-content: center;
    // align-items:center;
	max-width: 90rem;
	font-family: 'Fira Sans', sans-serif;
    height:50rem;
	transition: all .2s ease;
	background: rgba(56, 56, 56, 0.892);
	// border: 2px solid white;
	border-radius: 30px;
	padding: 0px:
	margin: 0px;

	@media (max-width: 875px) {
		position: relative;
		left: calc(50% - 47rem);
		top: -6rem;
		width: 200rem;
		// border: 5px solid red;
		font-size: 1.6rem;
		height: 122rem;
	}
	
`;

const StyledHeroFacts = styled.div`
	// border: 5px solid red;
	position: absolute;
	top: 25rem;
	left: 4.5rem;
	font-size: 1.5rem;
	max-width: 30rem;
	line-height: 2;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	// border: 2px solid green;
	justify-content: space-between;
	@media (max-width: 875px) {
		position: relative;
		top: 50rem;
		left: 27.5rem;
	}
`;

const StyledHeroFact = styled.div`
	flex-basis: 100%;
	display: flex;
	margin: 5px;
	justify-content: space-between;
	align-items: center;
	width: 22rem;
	// border: 2px solid green;
`;

const Btn = styled.button`
	width: 50px;
	height: 50px;
	color: white;
	background: rgba(56, 56, 56, 0.692);
	border-radius: 50%;
	border: none;
	cursor: pointer;
	margin: 0 5px;
	transition: all .2s ease;
	animation: ${fadeIn} 2s;
	border: 2px solid white;
	&:hover {
		background: white;
		border: 2px solid black;
		color: black;
	}

	@media (max-width: 875px) {
		position: relative;
		top: 28.5rem;
		width: 40px;
		height: 40px;
		left: 43.5rem;
	}
`;

const ImageWrapper = styled.div`
height: 20rem;
width: 15rem;
position: absolute;
border: 1px solid white;
top: -4rem;
left: -21rem;
border-radius: 5px;
background-image: url("https://image.tmdb.org/t/p/w1280/${({ poster_path }) => poster_path}");
background-size: cover;
background-repeat: no-repeat;
background-color: #464646;
background-position: top center;
@media (max-width: 875px) {
	position: absolute;
	top: 28rem;
	left: 24.5rem;
	height: 15rem;
width: 10rem;
}

`;
const StyledInfo = styled.div`
	// border: 5px solid blue;
	position: relative;
	width: 60rem;
	height: 50rem;
	margin-left: 28rem;

	@media (max-width: 875px) {
		width: 35rem;
		top: 5rem;
	}
`;

const ButtonsWrapper = styled.div`
	height: 20rem;
	width: 15rem;
	position: absolute;
	// border: 1px solid white;
	top: 18.5rem;
	left: 8.7rem;
	display: flex;
	border-radius: 5px;
	@media (max-width: 875px) {
		top: 6rem;
		left: -3rem;
	}
`;
