import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Header/Footer/Footer';
import Login from './Components/Header/Login/Login';
import AuthProvider from './Components/Header/Context/AuthProvider';
import PrivateRoute from './Components/Header/PrivateRoute/PrivateRoute';
import Register from './Components/Header/Login/Register/Register';
import Shared from './Components/Header/Shared/Shared';
import FoodDetails from './Components/Header/Foods/FoodDetails/FoodDetails';
import MyOrders from './Components/Header/MyOrders/MyOrders';
import Update from './Components/Header/Update/Update';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Shared />
					</Route>

					<Route exact path="/shared">
						<Shared />
					</Route>
					<PrivateRoute exact path="/details/:id">
						<FoodDetails />
					</PrivateRoute>
					<PrivateRoute exact path="/myorders">
						<MyOrders></MyOrders>
					</PrivateRoute>
					<PrivateRoute exact path="/update/:id">
						<Update></Update>
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
