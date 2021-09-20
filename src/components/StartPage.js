import React from 'react'
import { StartContainer, Img, ButtonLink } from './startPage.styles'
import vector from '../images/Vector.svg'
import { motion } from 'framer-motion'

const StartPage = () => {
    return (
    <>
        <StartContainer 

        >
            <Img animate={{width: '100px', borderRadius:[0,20,25,50],height: '100px'}} transition={{duration: 0.5, when: 'beforeChildren'}} src={vector} />
            <motion.button
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.7}}
                ><ButtonLink to='/page-1'>კითხვარის <br/> დაწყება</ButtonLink></motion.button>
        </StartContainer>
    </>
    )
}

export default StartPage
