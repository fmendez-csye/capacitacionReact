import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const BreadcrumbsExamples = () => (
	<div>
		<h1 align={"center"}>Breadcrumbs</h1>
		<Breadcrumb>
  			<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  			<Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    			Eprom
  			</Breadcrumb.Item>
 			<Breadcrumb.Item active>Data</Breadcrumb.Item>
		</Breadcrumb>
	</div>
);

export default BreadcrumbsExamples;