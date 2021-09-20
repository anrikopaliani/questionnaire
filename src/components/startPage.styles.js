import styled from "styled-components";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";

export const StartContainer = styled(motion.div)`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background: transparent;
        border: none;
    }
`

export const Img = styled(motion.img)`
    width: 100vw;
    height: 100%;
    border-radius: 50%;
    margin-bottom: 40px;
`

export const ButtonLink = styled(Link)`
    border: none;
    font-family: sylfaen;
    background: transparent;
    cursor: pointer;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    line-height: 36px;
    text-decoration: none;
    color: black;


    &:hover {
        text-shadow: 3px 0px 0px rgba(150, 150, 150, 1);
    }
`