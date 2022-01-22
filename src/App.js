import React, {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Layout/NavBar";
import MyForm from "./components/MyForm";
import Form from "./components/Form";
import Info from "./components/Info/Info";
import Todo from "./Todo/Todo";
import TodoProviders from "./store/TodoProviders";
import MyTodo from "./Todo/MyTodo";

const App = () => (
	<Fragment>
		<NavBar />
		<Container>
			<TodoProviders>
				<MyTodo />
			</TodoProviders>
		</Container>
	</Fragment>
);

export default App;
