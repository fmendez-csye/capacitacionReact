import React from "react";
import ButtonExamples from './components/ButtonExamples';
import AlertExamples from './components/AlertExamples';
import BreadcrumbsExamples from './components/BreadcrumbsExamples';
import CardsExample from './components/CardsExample';


const ComponentesEjemplo = () => (
	<div>
		<section>
			<ButtonExamples/>
		</section>
		<br/>
		<section>
			<AlertExamples/>
		</section>
		<br/>
		<section>
			<BreadcrumbsExamples/>
		</section>
		<br/>
		<section>
			<CardsExample/>
		</section>
	</div>
);

export default ComponentesEjemplo;