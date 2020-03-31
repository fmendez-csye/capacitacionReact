import React, { Fragment } from "react";
import { Button, Row, Container, Col, ButtonGroup, ToggleButton, ToggleButtonGroup, ButtonToolbar, DropdownButton, Dropdown} from "react-bootstrap";
import { MDBBtn, MDBIcon, MDBBtnGroup, MDBCol, MDBRow } from "mdbreact";

const ButtonExamples = () => (
	<Container fluid>
		<h1 align={"center"}>Buttons example</h1>
		<br/>
		<h3>Basics buttons</h3>
		<Row>
			<Col>
				<Button>Botón con bootstrap</Button>
				<button>Botón sin bootstrap</button>
			</Col>
		</Row>
		<br/>
		<Row>
			<Col>
				<Button variant="primary">Primary</Button>{' '}
  				<Button variant="secondary">Secondary</Button>{' '}
 				<Button variant="success">Success</Button>{' '}
 				<Button variant="warning">Warning</Button>{' '}
				<Button variant="danger">Danger</Button> 
				<Button variant="info">Info</Button>{' '}
				<Button variant="light">Light</Button> 
				<Button variant="dark">Dark</Button>{' '}
				<Button variant="link">Link</Button>
			</Col>
		</Row>
		<br/>
		<h3>Outline buttons</h3>
		<Row>
			<Col>
				<Button variant="outline-primary">Primary</Button>{' '}
  				<Button variant="outline-secondary">Secondary</Button>{' '}
 				<Button variant="outline-success">Success</Button>{' '}
  				<Button variant="outline-warning">Warning</Button>{' '}
  				<Button variant="outline-danger">Danger</Button>{' '}
  				<Button variant="outline-info">Info</Button>{' '}
  				<Button variant="outline-light">Light</Button>{' '}
  				<Button variant="outline-dark">Dark</Button>
			</Col>
		</Row>
		<br/>
		<h3>Additional styles</h3>
		<Row>
			<Col>
				<Fragment>
					<MDBBtn color="elegant">Elegant</MDBBtn>
					<MDBBtn color="unique">Unique</MDBBtn>
					<MDBBtn color="pink">Pink</MDBBtn>
					<MDBBtn color="purple">Purple</MDBBtn>
					<MDBBtn color="deep-purple">Deep-purple</MDBBtn>
					<MDBBtn color="indigo">Indigo</MDBBtn>
					<MDBBtn color="light-blue">Light blue</MDBBtn>
					<MDBBtn color="cyan">Cyan</MDBBtn>
					<MDBBtn color="dark-green">Dark-green</MDBBtn>
					<MDBBtn color="light-green">Light-green</MDBBtn>
					<MDBBtn color="yellow">Yellow</MDBBtn>
					<MDBBtn color="amber">Amber</MDBBtn>
					<MDBBtn color="deep-orange">Deep-orange</MDBBtn>
					<MDBBtn color="brown">Brown</MDBBtn>
					<MDBBtn color="blue-grey">Blue-grey</MDBBtn>
					<MDBBtn color="mdb-color">MDB</MDBBtn>
				</Fragment>
			</Col>
		</Row>
		<br/>
		<h3>Gradient buttons</h3>
		<Row>
			<Col>
				<Fragment>
					<MDBBtn gradient="peach">Peach</MDBBtn>
					<MDBBtn gradient="purple">Purple</MDBBtn>
					<MDBBtn gradient="blue">Blue</MDBBtn>
					<MDBBtn gradient="aqua">Aqua</MDBBtn>
				</Fragment>
			</Col>
		</Row>
		<br/>
		<h3>Buttons with icons</h3>
		<Row>
			<Col>
				<Fragment>
					<MDBBtn color="primary">
						<MDBIcon icon="magic" className="mr-1" /> Left
					</MDBBtn>
					<MDBBtn color="default">
						Right <MDBIcon icon="magic" className="ml-1" />
					</MDBBtn>
				</Fragment>
			</Col>
		</Row>
		<br/>
		<h3>Button tags</h3>
		<Row>
			<Col>
				<Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
  				<Button as="input" type="button" value="Input" />{' '}
  				<Button as="input" type="submit" value="Submit" />{' '}
 				<Button as="input" type="reset" value="Reset" />
			</Col>
		</Row>
		<br/>
		<h3>Sizes</h3>
		<Row>
			<Col>
				<div className="mb-2">
   					 <Button variant="primary" size="lg">
      					Large button
    				</Button>{' '}
    				<Button variant="secondary" size="lg">
      					Large button
    				</Button>
  				</div>
  				<div>
    				<Button variant="primary" size="sm">
      					Small button
    				</Button>{' '}
    				<Button variant="secondary" size="sm">
      					Small button
   					 </Button>
  				</div>
			</Col>
		</Row>
		<br/>
		<h3>Block Level Button</h3>
		<Row>
			<Col>
				<Button variant="primary" size="lg" block>
  					Block level button
  				</Button>
				<Button variant="secondary" size="lg" block>
    				Block level button
  				</Button>
			</Col>
		</Row>
		<br/>
		<h3>Active state</h3>
		<Row>
			<Col>
				<Button variant="primary" size="lg" active>
   					 Primary button
  				</Button>{' '}
 				<Button variant="secondary" size="lg" active>
   					 Button
  				</Button>
			</Col>
		</Row>
		<br/>
		<h3>Disabled state</h3>
		<Row>
			<Col>
				<Button variant="primary" size="lg" disabled>
   			 		Primary button
 				</Button>{' '}
 				<Button variant="secondary" size="lg" disabled>
    				Button
  				</Button>{' '}
  				<Button href="#" variant="secondary" size="lg" disabled>
    				Link
 				</Button>
			</Col>
		</Row>
		<br/>
		<h3>Checkbox / Radio</h3>
		<Row>
			<Col>
				<ButtonGroup toggle className="mb-2">
					<ToggleButton type="checkbox" defaultChecked value="1">
						Checked
						</ToggleButton>
						</ButtonGroup>
						<br />
						<ButtonGroup toggle>
						<ToggleButton type="radio" name="radio" defaultChecked value="1">
						Active
						</ToggleButton>
						<ToggleButton type="radio" name="radio" value="2">
						Radio
						</ToggleButton>
						<ToggleButton type="radio" name="radio" value="3">
						Radio
					</ToggleButton>
				</ButtonGroup>
			</Col>
		</Row>
		<br/>
		<h3>Uncontrolled</h3>
		<Row>
			<Col>
				<ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
					<ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
					<ToggleButton value={2}>Checkbox 2</ToggleButton>
					<ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
				</ToggleButtonGroup>
				<br/>
				<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
					<ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
					<ToggleButton value={2}>Radio 2</ToggleButton>
					<ToggleButton value={3}>Radio 3</ToggleButton>
				</ToggleButtonGroup>
			</Col>
		</Row>
		<br/>
		<h3>Button groups</h3>
		<Row>
			<Col>
				<ButtonGroup aria-label="Basic example">
					<Button variant="secondary">Left</Button>
					<Button variant="secondary">Middle</Button>
					<Button variant="secondary">Right</Button>
				</ButtonGroup>
			</Col>
		</Row>
		<br/>
		<h3>Button toolbar</h3>
		<Row>
			<Col>
				<ButtonToolbar aria-label="Toolbar with button groups">
					<ButtonGroup className="mr-2" aria-label="First group">
						<Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
					</ButtonGroup>
					<ButtonGroup className="mr-2" aria-label="Second group">
						<Button>5</Button> <Button>6</Button> <Button>7</Button>
					</ButtonGroup>
					<ButtonGroup aria-label="Third group">
						<Button>8</Button>
					</ButtonGroup>
				</ButtonToolbar>
			</Col>
		</Row>

		<br/>
		<h3>Button groups sizes</h3>
		<Row>
			<Col>
				<ButtonGroup size="lg" className="mb-2">
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<br />
				<ButtonGroup className="mb-2">
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</ButtonGroup>
				<br />
					<ButtonGroup size="sm">
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Col>
		</Row>

		<br/>
		<h3>Nesting</h3>
		<Row>
			<Col>
				<ButtonGroup>
					<Button>1</Button>
					<Button>2</Button>

					<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
						<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
						<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
					</DropdownButton>
				</ButtonGroup>
			</Col>
		</Row>

		<br/>
		<h3>Vertical variation</h3>
		<Row>
			<Col>
				<ButtonGroup vertical>
					<Button>Button</Button>
					<Button>Button</Button>

					<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
						<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
						<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
					</DropdownButton>

					<Button>Button</Button>
					<Button>Button</Button>

					<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
						<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
						<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
					</DropdownButton>

					<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
						<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
						<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
					</DropdownButton>
				</ButtonGroup>
			</Col>
		</Row>

		<br/>
		<h3>Multicolored button group</h3>
		<MDBRow>
			<MDBCol xl="5" md="6" className="mb-xl-0 mb-4">

				<MDBBtnGroup size="lg" className="mb-4">
					<MDBBtn color="primary">Left</MDBBtn>
					<MDBBtn color="warning">Left</MDBBtn>
					<MDBBtn color="danger">Left</MDBBtn>
				</MDBBtnGroup>

				<MDBBtnGroup className="mb-4">
					<MDBBtn color="primary">Left</MDBBtn>
					<MDBBtn color="warning">Left</MDBBtn>
					<MDBBtn color="danger">Left</MDBBtn>
				</MDBBtnGroup>

				<MDBBtnGroup size="sm" className="mb-4">
					<MDBBtn color="primary">Left</MDBBtn>
					<MDBBtn color="warning">Left</MDBBtn>
					<MDBBtn color="danger">Left</MDBBtn>
				</MDBBtnGroup>

			</MDBCol>

			<MDBCol xl="3" md="12" className="mb-xl-0 mb-4">
				<MDBBtnGroup vertical>
					<MDBBtn color="primary" className="ml-0">1</MDBBtn>
					<MDBBtn color="pink">2</MDBBtn>
					<MDBBtn color="success">3</MDBBtn>
					<MDBBtn color="amber">4</MDBBtn>
					<MDBBtn color="red">5</MDBBtn>
				</MDBBtnGroup>
			</MDBCol>

			<MDBCol xl="4" md="12">
				<div className="btn-toolbar mb-4" role="toolbar">
					<MDBBtnGroup className="mr-2">
						<MDBBtn color="mdb-color lighten-2">1</MDBBtn>
						<MDBBtn color="indigo lighten-2">2</MDBBtn>
						<MDBBtn color="blue lighten-2">3</MDBBtn>
						<MDBBtn color="light-blue lighten-2">4</MDBBtn>
						<MDBBtn color="cyan lighten-2">5</MDBBtn>
					</MDBBtnGroup>
				</div>
				<div className="btn-toolbar" role="toolbar">
					<MDBBtnGroup className="mr-2">
						<MDBBtn color="indigo lighten-2">
							<MDBIcon icon="star" />
						</MDBBtn>
						<MDBBtn color="blue lighten-2">
							<MDBIcon icon="heart" />
						</MDBBtn>
						<MDBBtn color="light-blue lighten-2">
							<MDBIcon icon="user" />
						</MDBBtn>
						<MDBBtn color="cyan lighten-2">
							<MDBIcon fab icon="twitter" />
						</MDBBtn>
					</MDBBtnGroup>
				</div>
			</MDBCol>
		</MDBRow>
	</Container>
);

export default ButtonExamples;