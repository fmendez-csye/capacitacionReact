import React from "react";
import EmpezarReact from "./jsx/EmpezarReact";
import Herramientas from "./jsx/Herramientas"

const Home = () => (
	<div>
		<h1 className={"titulo"}>Bienvenidos a la Capacitacion de React con Router v4!</h1>
		<br/>
		<EmpezarReact/>
		<Herramientas/>
		<p>npm install react-bootstrap bootstrap</p>
	</div>

);

export default Home;