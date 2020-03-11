import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
function ImagesField({ url_id }) {
	const params = {
		slidesPerView: 2,
		spaceBetween: 30,
		freeMode: true,
		observer: true,
		observeParents: true,
		preloadImages: true,
		updateOnImagesReady: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: false,
			type: 'fraction'
		}
	};

	const [ movie_images_list, update_movie_images_list ] = useState([]);

	useEffect(
		() => {
			getMovieImages(url_id);
		},
		[ url_id ]
	);

	async function getMovieImages(id) {
		let movieInfo = await fetch(
			`https://api.themoviedb.org/3/movie/${Number(id)}/images?api_key=d083014d3268dafcc42a2cd4008bb7d6
			`
		);
		let MovieImages = await movieInfo.json();
		let MovieImagesList = MovieImages.posters;
		update_movie_images_list(MovieImagesList);
	}

	return (
		<StyledImagesField>
			<Swiper {...params}>
				{movie_images_list.map((ImageInfo) => {
					return (
						<span>
							<ImageCard ImageInfo={ImageInfo} />
						</span>
					);
				})}
			</Swiper>
		</StyledImagesField>
	);
}

export default ImagesField;
const StyledImagesField = styled.div`
	display: flex;
	width: 100vw;
	top: 2rem;
	position: relative;
	color: white;
	display: flex;
	flex-wrap: wrap;
	user-select: none;
	align-items: center;
	justify-content: center;
	// border: 1px solid green;
	margin-top: 3rem;
	text-size-adjust: 100%;
	@media (max-width: 815px) {
		height: 50vh;
	}
`;
