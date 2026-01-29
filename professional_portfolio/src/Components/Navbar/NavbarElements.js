import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #006910;
    background-image: linear-gradient(134deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 41%,rgba(188, 188, 188, 0.04) 41%, rgba(188, 188, 188, 0.04) 100%),linear-gradient(19deg, rgba(41, 41, 41, 0.04) 0%, rgba(41, 41, 41, 0.04) 46%,rgba(233, 233, 233, 0.04) 46%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(65deg, rgba(24, 24, 24, 0.04) 0%, rgba(24, 24, 24, 0.04) 97%,rgba(108, 108, 108, 0.04) 97%, rgba(108, 108, 108, 0.04) 100%),linear-gradient(311deg, rgba(58, 58, 58, 0.04) 0%, rgba(58, 58, 58, 0.04) 79%,rgba(220, 220, 220, 0.04) 79%, rgba(220, 220, 220, 0.04) 100%),linear-gradient(90deg, rgb(25, 147, 13),rgb(68, 253, 105));
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5%;
    gap: 20px;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ecdc1a;
    }
`;

export const Bars = styled(FaBars)`
    display: none; /* Hide on desktop */
    color: #fff;
    z-index: 100;
    cursor: pointer;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
        display: block; /* Show only on mobile */
        position: absolute;
        top: 16px;
        left: 24px; /* Anchored to the left */
    }
`;

export const NavMenu = styled.div`
    display: flex; /* Horizontal on desktop */
    align-items: center;
    margin-right: -24px;

    .theme-toggle {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 10px;
        color: #fff;
        transition: transform 0.2s;
        
        &:hover {
            transform: scale(1.1);
            background: transparent; /* Overrides global button hover */
        }
    }

    @media screen and (max-width: 768px) {
        display: none; /* Hidden on mobile unless active */
        
        &.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0; /* Align with hamburger */
            background: #006910;
            width: 250px;
            padding: 1rem 0;
            border-radius: 0 0 8px 0;
            z-index: 99;
        }
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-family: var(--font-mono); /* Technical font */
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #ecdc1a; /* Matches your active/hover state */
    }
`;
