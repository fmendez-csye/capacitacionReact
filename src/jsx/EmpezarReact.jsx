import React from "react";

const EmpezarReact = () => (
	<div>
		<h2>Pasos a seguir para empezar a utilizar React:</h2>
		<ol className={"listaPasos"} type="1" start="1">
			<a href={"https://nodejs.org/en/"}><li>Instalar nodeJs versión estable 12.16.1 LTS</li></a>
			<br/>
			<li>
				Ejecutar los siguientes comandos:
				<ul>
					<br/>
					<li>
						npx create-react-app my-app
					</li>
					<br/>
					<li>
						cd my-app
					</li>
					<br/>
					<li>
						npm install --save react-router-dom
					</li>
					<br/>
					<li>
						npm start
					</li>
				</ul>
			</li>
		</ol>
		<p>Create React App no se encarga de la lógica de backend o de bases de datos; tan solo crea un flujo de
			construcción para frontend, de manera que lo puedes usar con cualquier backend. Para ello internamente usa
			Babel y webpack, pero no necesitas saber nada de estas herramientas para usar Create React App.
		</p>
		<br/>
		<p>Cuando estés listo para desplegar a producción, ejecuta npm run build lo cual crea una compilación optimizada 
		de tu aplicación en el directorio build. Puedes aprender más acerca de Create React App en su archivo README y en
		 la Guía del Usuario.
		 </p>
	</div>
);

export default EmpezarReact;