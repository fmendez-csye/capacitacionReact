import React, { } from 'react';
import { Card, Button, ListGroup, Container, Row, Col, ListGroupItem, Nav, CardGroup} from 'react-bootstrap';


const CardsExample = () => (
	<div>
		<h1 align={"center"}>Cards</h1>
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src="../EpromEdificio.png" waves />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>

		<br/>
		<h3>Content types</h3>
		<Card>
			<Card.Body>This is some text within a card body.</Card.Body>
		</Card>

		<br/>
		<h3>Title, text, and links</h3>
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
				</Card.Text>
				<Card.Link href="#">Card Link</Card.Link>
				<Card.Link href="#">Another Link</Card.Link>
			</Card.Body>
		</Card>

		<br/>
		<Container fluid>
			<h3>List Groups</h3>
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
						<ListGroup variant="flush">
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Header>Featured</Card.Header>
						<ListGroup variant="flush">
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>

		<br/>
		<Container fluid>
			<h3>Kitchen Sink</h3>
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="../IMG_5888.png" />
						<Card.Body>
							<Card.Title>Eprom</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Cras justo odio</ListGroupItem>
							<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
							<ListGroupItem>Vestibulum at eros</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

		<br/>
		<Container fluid>
			<h3>Header and Footer</h3>
			<Row>
				<Col>
					<Card>
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header>Quote</Card.Header>
						<Card.Body>
							<blockquote className="blockquote mb-0">
							<p>
								{' '}
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
								erat a ante.{' '}
							</p>
							<footer className="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</footer>
							</blockquote>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="text-center">
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
						<Card.Footer className="text-muted">2 days ago</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>

		<br/>
		<h3>Image caps</h3>
		<Card>
			<Card.Img variant="top" src="../iuDark.jpg" />
			<Card.Body>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk
					of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
		<br />
		<Card>
			<Card.Body>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk
					of the card's content.
				</Card.Text>
			</Card.Body>
			<Card.Img variant="bottom" src="../iu.jpg" />
		</Card>

		<br/>
		<h3>Image Overlays</h3>
		<Card className="bg-dark text-white">
			<Card.Img  src="../iu3.jpg" alt="Card image" />
			<Card.ImgOverlay>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to
					additional content. This content is a little bit longer.
				</Card.Text>
				<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>

		<br/>
		<h3>Image Overlays</h3>
		<Card>
			<Card.Header>
				<Nav variant="tabs" defaultActiveKey="#first">
				<Nav.Item>
				<Nav.Link href="#first">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
				<Nav.Link href="#link">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
				<Nav.Link href="#disabled" disabled>
					Disabled
				</Nav.Link>
				</Nav.Item>
				</Nav>
			</Card.Header>
			<Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
					With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
		<br/>
		<Card>
			<Card.Header>
				<Nav variant="pills" defaultActiveKey="#first">
					<Nav.Item>
						<Nav.Link href="#first">Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#disabled" disabled>
							Disabled
						</Nav.Link>å
					</Nav.Item>
				</Nav>
			</Card.Header>
			<Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
					With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>

		<br/>
		<h3>Card Styles</h3>
		<Card className="bg-dark text-white">
			<Card.Img  src="../iu3.jpg" alt="Card image" />
			<Card.ImgOverlay>
				<Card.Title>Card title</Card.Title>
				<Card.Text>
					This is a wider card with supporting text below as a natural lead-in to
					additional content. This content is a little bit longer.
				</Card.Text>
				<Card.Text>Last updated 3 mins ago</Card.Text>
			</Card.ImgOverlay>
		</Card>

		<br/>
		<h3>Card layout</h3>
		<CardGroup>
			<Card>
				<Card.Img variant="top" src="IMG_5888.png" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="EpromEdificio.png" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in to additional
						content.{' '}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="IMG_5888.png" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This card has even longer content than the first to
						show that equal height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		</CardGroup>

	</div>
);

export default CardsExample;