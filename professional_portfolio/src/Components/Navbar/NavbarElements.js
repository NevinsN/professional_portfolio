import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: var(--bg-main); 
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%; 
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-green);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;

    @media screen and (max-width: 768px) {
        /* Ensure the Logo (NN) stays left while Bars go right */
        padding: 0 20px;
    }
`;

export const NavMenu = styled.div`
    display: flex; 
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        display: none; 
        
        &.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 0; /* Align the drawer to the right */
            background: var(--bg-main);
            width: 100%; /* Or set a specific width like 250px */
            padding: 2rem;
            border-bottom: 2px solid var(--primary-green);
            box-shadow: var(--card-shadow);
            z-index: 99;
        }
    }
`;

export const NavLink = styled(Link)`
    color: var(--text-main);
    text-decoration: none;
    font-family: var(--font-mono);
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;
    
    &.active {
        color: var(--primary-green);
        border-bottom: 2px solid var(--primary-green);
    }

    &:hover {
        color: var(--text-strong);
    }

    &.nav-logo {
        font-weight: bold;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
`;

export const ResumeButton = styled.button`
    background: transparent;
    border: 1px solid var(--primary-green);
    color: var(--primary-green);
    padding: 8px 18px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
        background: var(--primary-green);
        color: #fff; /* Solid contrast on hover */
    }
`;

export const ThemeToggleButton = styled.button`
    background: transparent;
    border: none;
    color: var(--text-main); /* Automatically swaps based on your CSS variables */
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
        transform: scale(1.1);
        color: var(--primary-green);
    }

    &:active {
        transform: scale(0.9);
    }

    @media screen and (max-width: 768px) {
        margin-top: 10px; /* Gives it some breathing room in the mobile drawer */
    }
`;


export const Bars = styled(FaBars)`
    display: none; /* Hidden on desktop */
    color: var(--text-main);
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: block;
        /* Position it on the right */
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%); /* Perfectly centers vertically regardless of height */
        font-size: 1.8rem;
        z-index: 100;
    }
`;