import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Suspense fallback={<p>Loading...</p>}>
					<div className="app">
						<Header />
						<AppRouter />
					</div>
				</Suspense>
			</Router>
		</Provider>
	);
};

export default App;
