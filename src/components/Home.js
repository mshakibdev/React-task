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

					<div className="ms-4">
						<h6>Md.Shakib Hassan </h6>
						<p>Frontend Developer</p>
					</div>
				</Col>
				<Col>
					<div>
						<h2>About My self</h2>
						<p>
							I am a Frontend Developer who enjoys exploring and solving problems in Front-end arena.
							Because my curiosity makes me want to know more about the ins and outs of the tools I am
							working with, I also like to explore new tech and skill and try to play with them.
						</p>
					</div>
				</Col>
			</Row>
		</Card>
	);
}

export default Home;
