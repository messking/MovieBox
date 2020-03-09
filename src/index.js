import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GlobalStyling from './Styles/global-styles';
import App from './App'
import { Storage } from './Store/MovieStore';

ReactDOM.render(<>
<Storage>
<GlobalStyling/>
<App />
</Storage>
</>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
