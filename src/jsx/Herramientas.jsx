import React from "react";

const Herramientas = () => (
	<div>
		<h2>Herramientas al ejecutar el comando create-react-app:</h2>
		<p>Una cadena de herramientas para construir Javascript generalmente consiste de:</p>
		<ol className={"lista"} type="1" start="1">
			<li>
				Un gestor de paquetes como Yarn o npm. Este te permite aprovechar el vasto ecosistema de paquetes de terceros,
				 e instalarlos o actualizarlos de una manera fácil.
			</li>
			<br/>
			<li>
				Un empaquetador como webpack o Parcel. Este te permite escribir código modular y empaquetarlo junto en paquetes más 
				pequeños que optimizan el tiempo de carga.
			</li>
			<br/>
			<li>
				Un compilador como Babel. Este te permite escribir Javascript moderno que aún así funciona en navegadores más antiguos.
			</li>
		</ol>

	</div>
);

export default Herramientas;