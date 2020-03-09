// https://api.themoviedb.org/3/movie/330457/videos?api_key=d5e4a2eb5fb264de1583b6945d203546
import React from 'react';
import styled, { keyframes } from 'styled-components';
import YouTube from 'react-youtube';

function TrailerCard({ movie_video }) {
	const opts = {
		height: '180',
		width: '400',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0
		}
	};
	const _onReady = (event) => {
		event.target.pauseVideo();
	};
	return (
		<StyledTrailerWrapper>
			{movie_video !== 'null' ? (
				<YouTube videoId={movie_video.key} opts={opts} onReady={_onReady} />
			) : (
				<NoTrailerFound>
					<p>Trailer is currently unavailable.</p>
				</NoTrailerFound>
			)}
		</StyledTrailerWrapper>
	);
}

export default TrailerCard;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const NoTrailerFound = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	margin: auto;
	font-size: 2rem;
	width: 15rem;
	position: absolute;
	// border: 1px solid grey;
	top: 2rem;
	left: 8rem;
	background-image: url("https://www.like4like.org/img/blog/youtube-sad-face-128.jpg");
	width: 30rem;
	background-size: contain;
	background-repeat: repeat;
	border-radius: 20%;
	background-position: center center;
	height: 15rem;

	@media (max-width: 875px) {
		position: relative;
		// border: 1px solid grey;
		top: 0rem;
		left: 0rem;
	}
`;

const StyledTrailerWrapper = styled.div`
	display: flex;
	flex-shrink: 4;
	max-width: 100%;
	flex-basis: 20%;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 9rem;
	right: 60rem;
	// border-radius: 50%;
	font-size: 1rem;
	font-family: 'Noto Sans JP';
	flex-direction: column;
	flex-wrap: wrap;
	animation: ${fadeIn} 2s;
	// border: 5px solid red;
	position: relative;
	top: 11.5rem;
	right: 55rem;
	transition: all .5s ease;
	@media (max-width: 875px) {
		position: relative;
		top: 1.2rem;
		left: 1.5rem;
	}
`;
