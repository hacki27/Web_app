import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SliderCard from "./SliderCard";


const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list {
        display: flex;
        gap: 4.8rem;

        li {
            list-style: none;

            .navbar-link {
                &:link, 
                &:visited {
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1.7rem;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme.colors.black};
                    transition: color 0.3s linear;
                }

                &:hover,
                &:active {
                    color: ${({ theme }) => theme.colors.helper};
                }
            }
        }


        .navbar-link{
            list-style: none;
        }
    }
    `;

  return (
  <Nav>

    <div className="menuIcon">

        <ul className="navbar-list">
            <li>
                <NavLink className="navbar-link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/product">Product</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/contact">Contact</NavLink>
            </li>

        </ul>

    </div>

  </Nav>
  );
};

export default Navbar;