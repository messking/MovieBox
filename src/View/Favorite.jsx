import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Favorite({ id, update_user_removed, user_removed }) {
	useEffect(() => {});
	const localStorageObject = JSON.parse(localStorage.getItem(id));
	const { poster_path, title } = localStorageObject;
	return (
		<div>
			<StyledFavorite poster_path={poster_path} />
			<h3>{title}</h3>
			<Link to={`${id}`}>
				<Btn
					onClick={() => {
						console.log('Redirecting to information page!');
					}}
				>
					<i class="fas fa-info fa-2x" />
				</Btn>
			</Link>
			<Btn
				onClick={() => {
					localStorage.removeItem(`${id}`);
					update_user_removed(!user_removed);
				}}
			>
				<i class="fas fa-trash-alt fa-2x" />
			</Btn>
		</div>
	);
}

export default Favorite;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledFavorite = styled.div`
    width: 20rem;
    margin: auto;
	box-shadow 3px 3px 10px 6px #ccc;
	height: 30rem;
	// border: 1px solid grey;
    border-radius: 5px;
    // position: relative;
	background-image: url("https://image.tmdb.org/t/p/w1280//${({ poster_path }) => poster_path}");
	background-size: 100% 100%;
    background-repeat: no-repeat;
    border: 1px solid silver;
	// cursor:pointer;
	&:hover{
		// border:1px solid navy;
        // transform: scale(1.05);
	}
animation: ${fadeIn} 2s;
	transition: all .5s ease;
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
