import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const WebSocketContainer = lazy(() => import('./containers/WebSocketContainer'));

function App() {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route path="/web-socket-container" exact component={WebSocketContainer} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
