import React, { useState } from 'react';
import Hero from './Hero';
import ActorsField from './ActorsField';
import NavBar from './NavBar';
import ChosenNav from './ChosenNav';
import { Storage } from '../Store/MovieStore';
import ChosenMovieInfo from './ChosenMovieInfo';
import ImagesField from './ImagesField';
import { withRouter, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

function ChosenMovie({ history }) {
	const url_id = useParams();
	const { id } = url_id;
	const [ view_cast, update_view_cast ] = useState('CAST');

	return (
		<div class="App">
			{true ? (
				<Storage>
					<NavBar />
					<Hero>
						<ChosenMovieInfo history={history} url_id={Number(id)} />
					</Hero>
					<ChosenNav view_cast={view_cast} update_view_cast={update_view_cast} />
					{view_cast === 'CAST' ? <ActorsField url_id={Number(id)} /> : <ImagesField url_id={Number(id)} />}
				</Storage>
			) : null}
		</div>
	);
}

export default withRouter(ChosenMovie);
