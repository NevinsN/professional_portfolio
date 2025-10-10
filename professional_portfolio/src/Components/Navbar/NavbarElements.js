import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #006910;
    background-image: linear-gradient(90deg, rgb(173, 173, 173),rgb(129, 129, 129)),linear-gradient(90deg, rgb(91, 131, 23) 0%, rgb(91, 131, 23) 65%,rgb(110, 144, 39) 65%, rgb(110, 144, 39) 67%,rgb(128, 157, 55) 67%, rgb(128, 157, 55) 71%,rgb(147, 169, 70) 71%, rgb(147, 169, 70) 74%,rgb(165, 182, 86) 74%, rgb(165, 182, 86) 93%,rgb(184, 195, 102) 93%, rgb(184, 195, 102) 100%),linear-gradient(67.5deg, rgb(91, 131, 23) 0%, rgb(91, 131, 23) 65%,rgb(110, 144, 39) 65%, rgb(110, 144, 39) 67%,rgb(128, 157, 55) 67%, rgb(128, 157, 55) 71%,rgb(147, 169, 70) 71%, rgb(147, 169, 70) 74%,rgb(165, 182, 86) 74%, rgb(165, 182, 86) 93%,rgb(184, 195, 102) 93%, rgb(184, 195, 102) 100%),linear-gradient(157.5deg, rgb(91, 131, 23) 0%, rgb(91, 131, 23) 65%,rgb(110, 144, 39) 65%, rgb(110, 144, 39) 67%,rgb(128, 157, 55) 67%, rgb(128, 157, 55) 71%,rgb(147, 169, 70) 71%, rgb(147, 169, 70) 74%,rgb(165, 182, 86) 74%, rgb(165, 182, 86) 93%,rgb(184, 195, 102) 93%, rgb(184, 195, 102) 100%); background-blend-mode:overlay, overlay, overlay, normal;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
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
    display: block;
    color: #fff;
    background: transparent;
    border: none;
    z-index: 100;
    position: absolute;
    top: 16px;
    right: 24px;
    font-size: 2.2rem;
    cursor: pointer;
    background: rgba(0,0,0,0.1);
    border-radius: 6px;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: background 0.2s, color 0.2s;
    &:hover {
        background: #ecdc1a;
        color: #006910;
    }
`;

export const NavMenu = styled.div`
    display: none;
    &.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        right: 0;
        background: #006910;
        width: 200px;
        padding: 1rem 0;
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