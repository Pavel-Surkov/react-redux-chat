import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';

const App = () => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<Provider store={store}>
			<Router>
				<Suspense fallback={<p>Loading...</p>}>
					<div className="app">
						<Header />
						{loading ? <Loader /> : <AppRouter />}
					</div>
				</Suspense>
			</Router>
		</Provider>
	);
};

export default App;
