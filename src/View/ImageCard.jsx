import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'react-dynamic-swiper/lib/styles.css';

function ImageCard({ ImageInfo }) {
	const { file_path } = ImageInfo;

	return (
		<span>
			<StyledImageCard onClick={() => {}} file_path={file_path} />
		</span>
	);
}

export default ImageCard;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const StyledImageCard = styled.div`
	width: 40rem;
    box-shadow 3px 3px 10px 6px #ccc;
    height: 50rem;
    background:white;
    border-radius: 5px;
	background-image: url("https://image.tmdb.org/t/p/w500//${({ file_path }) => file_path}");
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
