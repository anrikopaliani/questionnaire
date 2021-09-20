import styled from "styled-components";
import { motion } from "framer-motion";

export const PageTwoContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    font-family:  sylfaen;
` 

export const RadioGroup = styled.div`
    padding-top: 42px;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 30px;
        margin-top: 20px;
    }

    label {
        padding-top: 11px;
        font-size: 25px;
        display: flex;
        align-items: center;
    }
    
    input {
        background: transparent;
        width: 513px;
        height: 50px;
        border: 0.8px solid #232323;
        padding-left: 20px;
        font-size: 25px;
    }

    input[type="radio"] {
        width: 25px;
        height: 25px;
    }
`



export const ErrorMessage = styled.div`
    color: #F15524;
    font-size: 23px;
`

export const IconDiv = styled.div`
    background-color: #DD3939;
    width: 229px;
    height: 229px;
    border-radius: 50%;
    position: absolute;
    top: 300px;
    margin-left: 50px;
    opacity: 0.5;
`
