import React, { useState } from 'react';
import Favorite from './Favorite';
import styled from 'styled-components';
const Favorites = () => {
	const [ user_removed, update_user_removed ] = useState(false);
	return (
		<StyledFavorites>
			{Object.keys(localStorage).length > 0 ? (
				<StyledFavoritesFlex>
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
				</StyledFavoritesFlex>
			) : (
				<StyledFavorites>
					<h3>There are no favorites yet :(</h3>
				</StyledFavorites>
			)}
		</StyledFavorites>
	);
};
export default Favorites;

const StyledFavorites = styled.div`
	display: flex;
	width: 100vw;
	flexs: wrap;
	margin-top: 8rem;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	text-align: center;
	overflow-hidden;

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

const StyledFavoritesFlex = styled.div`
	display: flex;
	width: 70vw;
	flexs: wrap;
	margin-top: 8rem;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	text-align: center;
	overflow-hidden;

`;
