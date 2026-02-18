import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    /* Use variables instead of hardcoded hex codes */
    background: var(--bg-main); 
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%; /* Using % instead of 2rem for better scaling */
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-green);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease; /* Smooth color transition during toggle */
`;

export const NavMenu = styled.div`
    display: flex; 
    align-items: center;
    gap: 2rem; /* Consistent spacing */

    @media screen and (max-width: 768px) {
        display: none; 
        
        &.active {
            background: var(--bg-main);
            backdrop-filter: blur(10px);
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 80px;
            right: 0;
            background: var(--bg-main);
            width: 200px; 
            padding: 1.5rem;
            border-left: 2px solid var(--primary-green);
            box-shadow: var(--card-shadow);
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
    color: var(--text-main);
    cursor: pointer;
    font-size: 1.5rem;
    width: 40px; /* Fixed width prevents layout shift */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.2); /* Fun interactive feedback */
    }
`;
