import React, { useState } from 'react';
export const MyContext = React.createContext();
const { Provider } = MyContext;
export const Storage = ({ children }) => {
	const [ popular_movie_list, set_popular_movie_list ] = useState([]);
	const [ chosen_movie_hero, set_chosen_movie_hero ] = useState([]);
	const [ page_counter, set_page_counter ] = useState(1);
	const [ chosen_movie_info, set_chosen_movie_info ] = useState({});
	const [ current_wishlist_movies, set_current_wishlist_movies ] = useState([]);
	const [ load_more, set_load_more ] = useState(true);
	const [ wishlist_movies, update_wishlist_movies ] = useState([ Object.keys(localStorage) ]);

	const data = {
		popular_movie_list,
		chosen_movie_hero,
		wishlist_movies,
		chosen_movie_info,
		current_wishlist_movies,
		page_counter,
		load_more
	};
	const actions = {
		set_popular_movie_list,
		set_chosen_movie_hero,
		update_wishlist_movies,
		set_chosen_movie_info,
		set_current_wishlist_movies,
		set_page_counter,
		set_load_more
	};
	const state = { data, actions };
	return <Provider value={state}> {children} </Provider>;
};
