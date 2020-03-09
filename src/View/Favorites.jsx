import React, { useState } from 'react';
import Favorite from './Favorite';
import styled from 'styled-components';
const Favorites = () => {
	const [ user_removed, update_user_removed ] = useState(false);
	return (
		<StyledFavorites>
			{Object.keys(localStorage).map((id) => {
				return (
					<StyledFavorite>
						<Favorite id={id} update_user_removed={update_user_removed} user_removed={user_removed} />
					</StyledFavorite>
				);
			})}
		</StyledFavorites>
	);
};
export default Favorites;

const StyledFavorites = styled.div`
	display: flex;
	margin: auto auto;
	max-width: 100vw;
	s: wrap;
	margin-top: 10rem;
	// border: 5px solid red;
	// width: 70vw;
	height: 100vh;
	// border: 2px solid blue;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
	// flex-direction: column;
`;

const StyledFavorite = styled.div`
	display: flex;
	text-align: center;
	min-width: 30rem;
	// border: 5px solid red;
	flex-wrap: wrap;
	margin: 50px;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
