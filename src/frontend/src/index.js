import React from 'react';
import { hydrate, render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {

	const provider = (
		<Provider store={store}>
			<App />
		</Provider>
	);

  render(
		provider,
		rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
