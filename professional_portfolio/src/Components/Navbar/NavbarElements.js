import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #006910;
    background-image: radial-gradient(circle at 72% 83%, rgba(12, 12, 12,0.04) 0%, rgba(12, 12, 12,0.04) 50%,rgba(172, 172, 172,0.04) 50%, rgba(172, 172, 172,0.04) 100%),radial-gradient(circle at 57% 65%, rgba(11, 11, 11,0.04) 0%, rgba(11, 11, 11,0.04) 50%,rgba(222, 222, 222,0.04) 50%, rgba(222, 222, 222,0.04) 100%),radial-gradient(circle at 64% 31%, rgba(11, 11, 11,0.04) 0%, rgba(11, 11, 11,0.04) 50%,rgba(191, 191, 191,0.04) 50%, rgba(191, 191, 191,0.04) 100%),linear-gradient(130deg, rgb(5, 235, 123),rgb(47, 52, 6));
    height: 55px;
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
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 55%;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
        &.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 55px;
            right: 0;
            background: #006910;
            width: 200px;
            padding: 1rem 0;
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