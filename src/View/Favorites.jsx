import React, { useState } from 'react';
import Favorite from './Favorite';
import styled from 'styled-components';
const Favorites = () => {
	const [ user_removed, update_user_removed ] = useState(false);
	return (
		<StyledFavorites>
			{Object.keys(localStorage).length > 0 ? (
				<div>
					{Object.keys(localStorage).map((id) => {
						return (
							<StyledFavorite>
								<Favorite
									id={id}
									update_user_removed={update_user_removed}
									user_removed={user_removed}
								/>
							</StyledFavorite>
						);
					})}
				</div>
			) : (
				<div>
					<h3>There are no favorites yet :(</h3>
				</div>
			)}
		</StyledFavorites>
	);
};
export default Favorites;

const StyledFavorites = styled.div`
	display: flex;
	margin: auto auto;
	width: 100vw;
	flexs: wrap;
	// border: 5px solid red;
	margin-top: 20rem;
	height: 100vh;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	text-align: center;
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
