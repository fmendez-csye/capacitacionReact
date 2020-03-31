import React from "react";
import UsersAPI from "./Api";
import { Link } from "react-router-dom";

const Profile = ({ match: { params: { id } } }) => {
    const user = UsersAPI.get(parseInt(id));
    if (!user) {
        return <div>Lo sentimos, el usuario no fue encontrado</div>;
    }
    return (
        <div>
            <h1>
                {user.firstName + " " + user.lastName} (id: {user.id})
            </h1>
            <h2>Proyecto: {user.project}</h2>
            <Link to="/users">Back</Link>
        </div>
    );
};

export default Profile;
