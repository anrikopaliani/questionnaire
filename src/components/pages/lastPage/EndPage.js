import React from 'react'
import Vector2 from '../../../images/Vector2.svg'
import {EndPageContainer, TopStar, Message} from './endPage.styles'
const EndPage = () => {
    return (
        <EndPageContainer>
            <TopStar
                initial={{opacity: 0, x: 250, y: 30}}
                animate={{opacity: 1, x: 70,y: -60}}
                transition={{delay: 0.7}}
            >
                <img src={Vector2} alt="vector" />
            </TopStar>
            <Message
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >მადლობა</Message>
            <TopStar
                initial={{opacity: 0, x: -250, y: 30}}
                animate={{opacity: 1, x:-70, y: 60}}
                transition={{delay: 0.7}}
            >
                <img src={Vector2} alt="vector" />
            </TopStar>
        </EndPageContainer>
    )
}

export default EndPage
