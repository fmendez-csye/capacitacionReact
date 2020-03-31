import React , { } from "react";
import {Alert} from 'react-bootstrap';
import { MDBContainer, MDBAlert } from 'mdbreact';
import AlertDismissibleExample from './AlertDismissibleExample';
import AlertDismissibleButton from './AlertDismissibleButton';

const AlertExamples = () => (
	<div>
		<h1 align={"center"}>Ejemplos de Alertas</h1>
		<Alert dismissible variant="danger">
      		<Alert.Heading>Alerta de error!</Alert.Heading>
      		<p>Mensaje descriptivo</p>
		</Alert>
		<Alert dismissible variant="success">
      		<Alert.Heading>Alerta de exitoso!</Alert.Heading>
      		<p>Mensaje descriptivo</p>
		</Alert>
		<Alert dismissible variant="info">
      		<Alert.Heading>Alerta de info!</Alert.Heading>
      		<p>Mensaje descriptivo</p>
		</Alert>
		<Alert dismissible variant="warning">
      		<Alert.Heading>Alerta de warning!</Alert.Heading>
      		<p>Mensaje descriptivo</p>
		</Alert>
		<Alert variant={"primary"}>
			This is a primary alert—check it out!
  		</Alert>
		<Alert variant={"secondary"}>
			This is a secondary alert—check it out!
  		</Alert>
		<Alert variant={"success"}>
			This is a success alert—check it out!
  		</Alert>
		<Alert variant={"danger"}>
			This is a danger alert—check it out!
  		</Alert>
		<Alert variant={"warning"}>
			This is a warning alert—check it out!
  		</Alert>
		<Alert variant={"info"}>
			This is a info alert—check it out!
  		</Alert>
		<Alert variant={"light"}>
			This is a light alert—check it out!
  		</Alert>
		<Alert variant={"dark"}>
			This is a dark alert—check it out!
  		</Alert>
		  
		<br/>
		<h2>links MDB</h2>
		<MDBContainer>
			<MDBAlert color="primary">
				A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="secondary">
				A simple secondary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="success">
				A simple success alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="danger">
				A simple danger alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="warning">
				A simple warning alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="info">
				A simple info alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="light">
				A simple light alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
			<MDBAlert color="dark">
				A simple dark alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
			</MDBAlert>
		</MDBContainer>

		<br/>
		<h2>links Bootstrap</h2>
		<Alert variant={"primary"}>
			A simple dark alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"secondary"}>
			A simple secondary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"success"}>
			A simple success alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"danger"}>
			A simple danger alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"warning"}>
			A simple warning alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"info"}>
			A simple info alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"light"}>
			A simple light alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>
		<Alert variant={"dark"}>
			A simple dark alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  		</Alert>

		<br/>
		<h2>Additional content MDBA</h2>
		<MDBContainer>
			<MDBAlert color="success">
			<	h4 className="alert-heading">Well done!</h4>
				<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
				<hr />
				<p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
			</MDBAlert>
		</MDBContainer>

		<br/>
		<h2>Additional content Bootstrap</h2>
		<Alert variant="success">
			<Alert.Heading>Hey, nice to see you</Alert.Heading>
			<p>
				Aww yeah, you successfully read this important alert message. This example
				text is going to run a bit longer so that you can see how spacing within an
				alert works with this kind of content.
			</p>
			<hr />
			<p className="mb-0">
				Whenever you need to, be sure to use margin utilities to keep things nice
				and tidy.
			</p>
		</Alert>

		<br/>
		<h2>Dismissing</h2>
		<AlertDismissibleExample/>
		<br/>
		<AlertDismissibleButton/>
	</div>
);

export default AlertExamples;