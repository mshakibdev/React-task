import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
function Album(props) {
	return (
		<Card fluid='md' className='mt-3 p-3 shadow p-3 mb-5 bg-body rounded'>
			<h3>Album List</h3>
			{props.albums.map((album) => (
				<CardGroup key={album.id} className='mt-3 mb-3 '>
					<Card border='#adb5bd' style={{width: "18rem", height: 150}} height={200}>
						<div className='d-flex'>
							<Card.Img
								variant='middle'
								src='https://i.picsum.photos/id/101/90/90.jpg?hmac=p3HqV3DgAE07zH9xemK8DKIsbQcAB4FuSBf15vxsdhg'
								width={150}
								height={150}
								className='rounded p-2'
							/>
							<Card.Body>
								<Card.Title>{album.name}</Card.Title>
								<Card.Text className='pb-3'>
									<b>{album.title}</b>
								</Card.Text>
							</Card.Body>
						</div>
					</Card>
				</CardGroup>
			))}
		</Card>
	);
}

export default Album;
