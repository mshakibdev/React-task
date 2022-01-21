import React, {Fragment} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Layout/NavBar";
import MyForm from "./components/MyForm";
import Form from "./components/Form";
import Info from "./components/Info/Info";
import TodoForm from "./Todo/TodoForm";

const App = () => (
	<Fragment>
		<NavBar />
		<Container className="">
			<TodoForm />
		</Container>
	</Fragment>
);

export default App;
