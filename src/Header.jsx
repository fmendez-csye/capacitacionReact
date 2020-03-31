import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.header`
    color: #000;
    background: linear-gradient(to left, #949852, #1586a1);
    padding: 10px 20px;

    ul {
        display: flex;
        justify-content: space-between;
    }

    a {
        padding: 10px 20px;
        color: white;
    }
    a:hover {
        background: #0d306e;
    }
`;

const Header = () => (
    <HeaderNav>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
				<li>
                    <Link to="/components">Components</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </HeaderNav>
);

export default Header;
