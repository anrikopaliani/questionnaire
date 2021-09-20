import styled from "styled-components";

export const PageOneContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`

export const FormContainer = styled.div`
    margin-top: 42px;
    h1 {
        font-size: 37px;
        color: #232323;
        font-weight: 700;
        padding-bottom: 5px;
        margin-top: 80px;
    }

    input {
        background: transparent;
        width: 513px;
        height: 50px;
        border: 0.8px solid #232323;
        padding-left: 20px;
        font-size: 25px;
    }
`

export const ErrorMessage = styled.div`
    display: flex;
    color: #F15524;
    justify-content: center;
    font-size: 23px;
`

export const IconDiv =styled.div`
    width: 622px;
    height: 75px;
    background-color: #D6D16E;
    position: absolute;
    opacity: 0.7;
    top: 300px;
    margin-left: 120px;
`