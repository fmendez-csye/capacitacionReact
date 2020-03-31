import React from "react";
import UsersAPI from "./Api";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

const mapUser = url =>
	UsersAPI.all().map(u => (
/* 		<li key={u.id}>
			<Link to={`${url}/${u.id}`}>{u.name}</Link>
		</li> */
		<tr key={u.id}>
		<td>{u.id}</td>
		<td><Link to={`${url}/${u.id}`}>{u.firstName}</Link></td>
		<td>{u.lastName}</td>
		<td>{u.userName}</td>
		<td>
			<Link to={`${url}/${u.id}`}><Button variant="info">info</Button>{" "}</Link>
			<Button className={"fas fa-cloud"} variant="danger">Delete</Button>{""}
		</td>
	  </tr>
	));

const AllUsers = ({ match }) => (
	<div>
{/* 		<p>Soy una lista:</p>
		<ul>{mapUser(match.url)}</ul>
 */}
		<Table striped bordered hover responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{mapUser(match.url)}
			</tbody>
		</Table>
	</div>
);

export default AllUsers;