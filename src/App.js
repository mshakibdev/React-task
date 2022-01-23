import React, {Fragment} from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Layout/NavBar";
import Form from "./components/Form";
import Info from "./components/Info/Info";
import Todo from "./Todo/Todo";
import TodoProviders from "./store/TodoProviders";
import {Routes, Route} from "react-router-dom";
import DropDown from './components/DropDown';

const App = () => (
	<Fragment>
		<NavBar />
		<Container>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/form' element={<Form />} />
				<Route path='/info' element={<Info />} />

				<Route
					path='/todo'
					element={
						<TodoProviders>
							<Todo />
						</TodoProviders>
					}
				/>
				<Route path='/menu' element={<DropDown />} />
			</Routes>
		</Container>
	</Fragment>
);

export default App;
