import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
function User(props) {
	return (
		<Card fluid='md' className='mt-3 p-3 shadow p-3 mb-5 bg-body rounded'>
			<h3>User List</h3>
			{props.users.map((user) => (
				<CardGroup key={user.id} className='mt-3 mb-3 '>
					<Card border='#adb5bd' style={{width: "18rem", height: 150}} height={200}>
						<div className='d-flex'>
							<Card.Img
								variant='middle'
								src='https://i.picsum.photos/id/1005/90/90.jpg?hmac=T5LRovJHDmu9b1f3kv6pNYSfPST4y9b-BqbmepnuL70'
								width={150}
								height={150}
								className='rounded p-2'
							/>
							<Card.Body>
								<Card.Title>
									<b>{user.name}</b>
								</Card.Title>
								<Card.Text className='pb-3'>
									{user.email}
									<br />

									{user.phone}
									<br />
									{user.address?.city}
								</Card.Text>
							</Card.Body>
						</div>
					</Card>
				</CardGroup>
			))}
		</Card>
	);
}

export default User;
