import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ActorCard from './ActorCard';
function ActorsField({ url_id }) {
	const [ movie_credits, update_movie_credits ] = useState([]);

	useEffect(
		() => {
			getMovieCredits(url_id);
		},
		[ url_id ]
	);

	async function getMovieCredits(id) {
		let movieInfo = await fetch(
			`https://api.themoviedb.org/3/movie/${Number(id)}/credits?api_key=d083014d3268dafcc42a2cd4008bb7d6
			`
		);
		let MovieCredits = await movieInfo.json();
		update_movie_credits(MovieCredits.cast);
	}

	return (
		<StyledActorsField>
			{movie_credits.map((ActorInfo) => {
				return <ActorCard ActorInfo={ActorInfo} key={ActorInfo.id} />;
			})}
		</StyledActorsField>
	);
}

export default ActorsField;

const StyledActorsField = styled.div`
	// // margin-top: 20px;
	// display: flex;
	// // max-width:100vw;
	// max-width: 70vw;
	// top: 2rem;
	// position: relative;
	// color: black;
	// display: flex;
	// flex-wrap: wrap;
	// user-select: none;
	// align-items: center;
	// justify-content: center;
	// margin: auto auto;
	// text-size-adjust: 100%;

	// margin-top: 20px;
	display: flex;
	// max-width:100vw;
	width: 60vw;
	top: 2rem;
	position: relative;
	color: black;
	display: flex;
	flex-wrap: wrap;
	user-select: none;
	align-items: center;
	justify-content: center;
	// border: 1px solid green;
	margin: auto auto;
	text-size-adjust: 100%;
`;
