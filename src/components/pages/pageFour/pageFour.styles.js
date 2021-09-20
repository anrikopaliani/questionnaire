import styled from "styled-components";

export const PageFourContainer = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    font-family: sylfaen;
    justify-content: space-between;
    align-items: flex-start;
`

export const FormContainer = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    p {
        font-size: 25px;
        width: 606px;
        padding-top: 42px;
    }

    h1 {
        padding-top: 44px;
        padding-bottom: 20px;
    }

    input[type="radio"] {
        width: 25px;
        height: 25px;
        background-color: transparent;
    }

    label {
        font-size: 25px;
    }

    textarea {
        resize: none;
        background-color: transparent;
        width: 622px;
        height: 184px;
        font-size: 24px;
    }

    button {
        background-color: #208298;
        width: 180px;
        height: 56px;
        border-radius: 42px;
        font-size: 18px;
        color: #fff;
        margin-top: 54px;
        border: none;
        cursor: pointer;
        margin-left: 450px;
        text-decoration: none;
    }
`

export const IconDiv = styled.div`
    position: absolute;
    margin-left: 80px;
    top: 150px;
    opacity: 0.4;
`