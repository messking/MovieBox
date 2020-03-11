import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { MyContext } from '../Store/MovieStore';
import { Link } from 'react-router-dom';
function HeroInfo() {
	const state = useContext(MyContext);
	const { chosen_movie_hero, current_wishlist_movies } = state.data;
	const {
		update_wishlist_movies,
		set_chosen_movie_info,
		set_current_wishlist_movies,
		set_popular_movie_list
	} = state.actions;
	const { title, overview, id } = chosen_movie_hero;
	return (
		<StyledHeroInfoInformation>
			<h2>{title}</h2>
			<p>{overview}</p>
			<Link to={`${id}`}>
				<Btn
					onClick={() => {
						set_chosen_movie_info(id);
						set_popular_movie_list([]);
						window.scrollTo(0, 0);
					}}
				>
					<i class="fas fa-info fa-2x" />
				</Btn>
			</Link>
			<Btn
				onClick={() => {
					set_current_wishlist_movies([ ...current_wishlist_movies, id ]);
					if (!Object.keys(localStorage).includes(id.toString())) {
						localStorage.setItem(`${id}`, JSON.stringify(chosen_movie_hero));
						update_wishlist_movies(Object.keys(localStorage));
					}
				}}
			>
				<i class="fas fa-star fa-2x" />
			</Btn>
		</StyledHeroInfoInformation>
	);
}

export default HeroInfo;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledHeroInfoInformation = styled.div`
	// text-shadow: 1px 1px grey;
	color: white;
	// border: 5px solid red;
	position: relative;
	// border: 5px solid red;
	left: calc(50% - 60rem);
	font-size: 1.5rem;
	top: 55rem;
	z-index: 2;
	padding: 1.5rem;
	width: 60rem;
	transition: all .2s ease;
	background: rgba(56, 56, 56, 0.492);
	// border: 2px solid white;
	border-radius: 30px;
	padding: 0px:
	margin: 0px;


	@media (max-width: 1029px) {
		left: calc(50% - 40rem);
			width: 50vw;
			position: relative;
 
	}
	@media (max-width: 815px) {
		left: calc(50% - 37rem);
		top: 50rem;
		width: 40vw;
		position: relative;
	}    

	@media (max-width: 768px) {
		left: calc(75% - 50vw);
		top: 50rem;
		width: 50vw;
		position: relative;
	}   

	@media (max-width: 425px) {
		left: calc(50% - 18rem);
		top: 50rem;
		width: 60vw;
		position: relative;
	}   

	@media (max-width: 375px) {
	left: 4.5rem;
		top: 50rem;
		width: 35rem;
		// height: 30rem;
		}

		@media (max-width: 320px) {
			left: 8.5rem;
				top: 32rem;
				width: 20rem;
				// height: 30rem;
				}

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
`;
