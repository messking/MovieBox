import React from 'react';
import styled from 'styled-components';

function ChosenNav({ update_view_cast }) {
	return (
		<header className="Searchbox">
			<StyledChosenNav className="Searchbox">
				<StyledButton
					onClick={() => {
						update_view_cast('CAST');
					}}
				>
					<i class="far fa-list-alt" /> CAST
				</StyledButton>
				<StyledButton
					onClick={() => {
						update_view_cast('POSTERS');
					}}
				>
					<i class="far fa-images" /> POSTERS
				</StyledButton>
			</StyledChosenNav>
		</header>
	);
}

export default ChosenNav;

const StyledChosenNav = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	// border: 5px solid yellow;
	z-index: 16;
	// align-items: center;
	justify-content: space-between;
	// border: 1px solid red;
`;

const StyledButton = styled.button`
	display: flex;
	width: 20rem;
	height: 100%;
	// margin: 5rem;
	justify-content: space-evenly;
	align-items: center;
	background: #282c34;
	font-size: 3rem;
	color: white;
	border: none;
	cursor: pointer;
	font-family: 'Noto Sans JP';
	:hover {
		background: #303f54;
	}
`;
