import React from 'react';
import styled, { keyframes } from 'styled-components';

function ActorCard({ ActorInfo }) {
	const { profile_path, name, character } = ActorInfo;

	return (
		<StyledActorWarpper>
			{profile_path !== null ? (
				<StyledActorCard
					onClick={() => {
						// set_chosen_movie_hero(MovieInfo);
					}}
					profile_path={profile_path}
				/>
			) : (
				<StyledActorCard>
					<PhotoUnavilable>
						Photo Unavailable <i class="fas fa-portrait fa-5x" />
					</PhotoUnavilable>
				</StyledActorCard>
			)}

			<p>
				{<h2>{name}</h2>}
				{<h3>{character}</h3>}
			</p>
		</StyledActorWarpper>
	);
}

export default ActorCard;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledActorCard = styled.div`
	width: 10rem;
    box-shadow 3px 3px 10px 6px #ccc;
	height: 15rem;
	margin: 10px;
	display: flex;
	align-content: space-between;
    border-radius: 5px;
	background-image: url("https://image.tmdb.org/t/p/w500//${({ profile_path }) => profile_path}");
	background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
	// cursor:pointer;
	&:hover{
		// border:1px solid navy;
		// transform: scale(1.05);
	
	}
animation: ${fadeIn} 2s;
	transition: all .5s ease;
`;

const StyledActorWarpper = styled.div`
	display: flex;
	flex-shrink: 4;
	max-width: 100%;
	flex-basis: 20%;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	// border: 5px solid magenta;
	font-family: 'Noto Sans JP';
	flex-direction: column;
	flex-wrap: wrap;
`;

const PhotoUnavilable = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	align-content: space-between;
	justify-content: center;
`;
