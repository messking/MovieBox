import React from 'react';
import './App.css';
import Hero from './View/Hero';
import SearchBox from './View/SearchBox';
import MoviesField from './View/MoviesField';
import HeroInfo from './View/HeroInfo';
function HomePage() {
	return (
		<div class="App">
			<Hero>
				<HeroInfo />
			</Hero>
			<SearchBox />
			<MoviesField />
		</div>
	);
}

export default HomePage;
