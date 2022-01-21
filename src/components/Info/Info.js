import React, {useEffect, useState, useCallback} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import User from "./User";
import Album from "./Album";

function Info() {
	const USER_API_URL = "https://jsonplaceholder.typicode.com/users";
	const ALBUM_API_URL = "https://jsonplaceholder.typicode.com/albums";

	const [users, setUsers] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [error, setError] = useState(null);

	const fetchUserHandler = useCallback(async () => {
		try {
			const response = await fetch(USER_API_URL);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const data = await response.json();
			console.log(data[0]?.address.city);
			const loadedUsers = [];
			for (const key in data) {
				loadedUsers.push({
					id: key,
					name: data[key].name,
					email: data[key].email,
					phone: data[key].phone,
					address: data[key].address,
				});
			}

			setUsers(loadedUsers);
		} catch (error) {
			setError(error.message);
		}
	}, []);

	const fetchAlbumHandler = useCallback(async () => {
		try {
			const response = await fetch(ALBUM_API_URL);

			if (!response.ok) {
				throw new Error("Something went wrong");
			}
			const data = await response.json();

			const loadedAlbums = [];
			for (const key in data) {
				loadedAlbums.push({
					id: key,
					title: data[key].title,
				});
			}

			setAlbums(loadedAlbums);
		} catch (error) {
			setError(error.message);
		}
	}, []);

	useEffect(() => {
		fetchUserHandler();
		fetchAlbumHandler();
	}, [fetchUserHandler, fetchAlbumHandler]);

	//users-data
	let userContent = <p>No users in Database</p>;

	if (error) {
		userContent = <p>{error}</p>;
	}
	if (users.length > 0) {
		userContent = <User users={users} />;
	}

	//  album-data
	let albumContent = <p>No albums in Database</p>;

	if (error) {
		albumContent = <p>{error}</p>;
	}
	if (albums.length > 0) {
		albumContent = <Album albums={albums} />;
	}

	return (
		<Card fluid='md' className='mt-3 p-3 shadow p-3 mb-5 bg-body rounded'>
			<Container>
				<Row>
					<Col>{userContent}</Col>
					<Col>{albumContent}</Col>
				</Row>
			</Container>
		</Card>
	);
}

export default Info;
