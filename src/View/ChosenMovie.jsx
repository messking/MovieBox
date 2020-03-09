import React, { useState } from 'react';
import Hero from './Hero';
import ActorsField from './ActorsField';
import NavBar from './NavBar';
import ChosenNav from './ChosenNav';
import { Storage } from '../Store/MovieStore';
import ChosenMovieInfo from './ChosenMovieInfo';
import ImagesField from './ImagesField';
import { withRouter, useParams } from 'react-router-dom';

function ChosenMovie({ history }) {
	const url_id = useParams();
	const { id } = url_id;
	// console.log('params are', useParams());
	const [ view_cast, update_view_cast ] = useState('CAST');

	return (
		<div class="App">
			<Storage>
				<NavBar />
				<Hero>
					<ChosenMovieInfo history={history} url_id={Number(id)} />
				</Hero>
				<ChosenNav view_cast={view_cast} update_view_cast={update_view_cast} />
				{view_cast === 'CAST' ? <ActorsField url_id={Number(id)} /> : <ImagesField url_id={Number(id)} />}
			</Storage>
		</div>
	);
}

export default withRouter(ChosenMovie);
