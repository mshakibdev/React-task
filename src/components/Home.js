import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

function Home() {
	return (
		<Card fluid='md' className='mt-3 p-3 shadow p-3 mb-5 bg-body rounded'>
			<Row className='d-flex justify-content-center'>
				<Col className='d-flex'>
					<Image
						height={100}
						width={100}
						src='https://i.picsum.photos/id/1005/90/90.jpg?hmac=T5LRovJHDmu9b1f3kv6pNYSfPST4y9b-BqbmepnuL70'
						roundedCircle={true}
					/>

					<div>
						<h6>Md.Saiful Islam Khan </h6>
						<p>Senior Software Engineer</p>
					</div>
				</Col>
				<Col>
					<div>
						<h2>About My self</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took
							a galley of type and scrambled it to make a type specimen book. It has survived not only
							five centuries, but also the leap into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
						</p>
					</div>
				</Col>
			</Row>
		</Card>
	);
}

export default Home;
