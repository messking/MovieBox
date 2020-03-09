import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../Store/MovieStore';
function NavBar() {
	const state = useContext(MyContext);
	const { set_popular_movie_list } = state.actions;
	const params = useParams();
	const [ wish_list_opened, set_wish_list_opened ] = useState(false);
	return (
		<div>
			<header className="Header">
				<StyledNavBar>
					<i class="fas fa-video" />
					<Link
						onClick={() => {
							if (params.id) set_popular_movie_list([]);
						}}
						to="/"
					>
						<p data-tip="Home">
							<h3 className="HeaderText">MovieBox</h3>
						</p>

						<ReactTooltip place="bottom" />
					</Link>
				</StyledNavBar>
				<StyledWishList
					onClick={() => {
						set_wish_list_opened(!wish_list_opened);
					}}
				>
					<Link to="/favorites">
						<p data-tip="Favorites">
							<i class="fas fa-star fa-1x" />
						</p>
						<ReactTooltip place="bottom" />
					</Link>
				</StyledWishList>
			</header>
		</div>
	);
}

export default NavBar;

const StyledNavBar = styled.div`
	display: flex;
	// border: 5px solid blue;
	margin-left: 5rem;
	align-items: center;
	// justify-content: space-between;
	// margin-left: 295px;
	@media (max-width: 875px) {
		margin-left: 5rem;
	}
`;

const StyledWishList = styled.div`
	// margin-left: auto;
	// cursor: pointer;
	// border: 5px solid green;
	margin-right: 5rem;
	@media (max-width: 875px) {
		margin-right: 5rem;
	}
`;
