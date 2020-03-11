import React, { useState } from 'react';
export const MyContext = React.createContext();
const { Provider } = MyContext;
export const Storage = ({ children }) => {
	const [ popular_movie_list, set_popular_movie_list ] = useState([]);
	const [ chosen_movie_hero, set_chosen_movie_hero ] = useState([]);
	const [ chosen_movie_info, set_chosen_movie_info ] = useState({});
	const [ current_wishlist_movies, set_current_wishlist_movies ] = useState([]);
	const [ current_page, set_current_page ] = useState(2);
	const [ load_more, set_load_more ] = useState(true);
	const [ wishlist_movies, update_wishlist_movies ] = useState([ Object.keys(localStorage) ]);
	const [ is_loading, set_is_loading ] = useState(false);

	const data = {
		popular_movie_list,
		chosen_movie_hero,
		wishlist_movies,
		chosen_movie_info,
		current_wishlist_movies,
		load_more,
		current_page,
		is_loading
	};
	const actions = {
		set_popular_movie_list,
		set_chosen_movie_hero,
		update_wishlist_movies,
		set_chosen_movie_info,
		set_current_wishlist_movies,
		set_load_more,
		set_current_page,
		set_is_loading
	};
	const state = { data, actions };
	return <Provider value={state}> {children} </Provider>;
};
