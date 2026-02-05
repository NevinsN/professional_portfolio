import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/* NavbarElements.js - Updated Nav Styled Component */
export const Nav = styled.nav`
    /* A sophisticated 'Architectural' Gradient */
    background: ${props => props.theme === 'dark' 
        ? 'linear-gradient(135deg, #0d1117 0%, #162a1d 100%)' 
        : 'linear-gradient(135deg, #f0f9f6 0%, #d1eadd 100%)'};
    
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    
    /* Add a subtle 'Grid Line' at the bottom instead of a heavy border */
    border-bottom: 1px solid ${props => props.theme === 'dark' 
        ? 'rgba(63, 185, 80, 0.2)' 
        : 'rgba(0, 105, 16, 0.1)'};
    
    /* This adds a slight 'Glass' effect */
    backdrop-filter: blur(10px);
`;


export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #ecdc1a;
    }

    /* If this is the NN logo, use specific styling */
    &.nav-logo {
        font-weight: bold;
        font-size: 1.5rem;
        font-family: var(--font-mono);
        padding: 0;           /* Prevents extra space from staggering it */
    }
`;

export const Bars = styled(FaBars)`
    display: none; /* Hide on desktop */
    color: #fff;
    z-index: 100;
    cursor: pointer;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
       display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        margin-right: 15px;
        position: static;
    }
`;

export const NavMenu = styled.div`
    display: flex; 
    align-items: center;

    @media screen and (max-width: 768px) {
        /* 1. Default state: hidden and off-screen */
        display: none; 
        
        /* 2. When the 'active' class is applied via the toggle state */
        &.active {
            display: flex !important; /* Force display when state is true */
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0; 
            background: #006910;
            width: 160px; 
            padding: 1rem 0;
            z-index: 1001;
            /* Ensure it covers the width without creating overflow */
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

    @media screen and (max-width: 768px) {
        /* Remove position: absolute if it was there */
        position: relative; 
        font-size: 1.5rem;
    }
`;
