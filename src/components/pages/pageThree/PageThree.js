import React, {useState} from 'react'
import { LogoContainer,Line, ButtonContainer, Button  } from '../Global.styles'
import { PageTwoContainer, RadioGroup } from '../pageTwo/pageTwo.styles'
import { IconDiv, RegisterMessage } from './pageThree.styles'
import {FaHandPointRight} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import star from '../../../images/mainlogo.svg'
import redberryLogo from '../../../images/Frame.svg'
import doctor2 from '../../../images/doctor2.svg'


const PageThree = () => {
    const [pick1,setPick1] = useState('')
    const [pick2,setPick2] = useState('')
    const [pick3,setPick3] = useState('')

    const handleClick = (value) => {
        if(value === 'yes') {
            setPick1(value)
            setPick2('')
            setPick3('')
        } else {
            setPick1(value)
            setPick2('')
            setPick3('')
        }
    }

    return (
    <>
            <LogoContainer>
                <img src={redberryLogo} alt="" />
                <p>3/4</p>
            </LogoContainer>
            <Line></Line>
            <PageTwoContainer>
                <RadioGroup>
                    <h1>უკვე აცრილი ხარ?*</h1>
                    <label>
                        <input name="pick1" onClick={() => handleClick('yes')} type="radio" value="yes"/>
                        კი
                    </label>
                    <label>
                        <input name="pick1" onClick={() => handleClick('no')} type="radio" value="no"/>
                        არა
                    </label>
                    {pick1 === 'yes' ? <>
                        <h1>აირჩიე რა ეტაპზე ხარ*</h1>
                        <label>
                            <input type="radio" value='firstDose' onClick={() => setPick2('firstDose')} name="pick2" />
                            პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
                        </label>
                        <label>
                            <input type="radio"  onClick={() => setPick2('vaccinated')} value="vaccinated" name="pick2" />
                            სრულად ვაქცინირებული ვარ
                        </label>
                        <label>
                            <input type="radio" value="notregistered" onClick={() => setPick2('notregistered')} name="pick2" />
                            პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                        </label>
                    </> : null}
                        {pick1 === 'yes' && pick2 === 'notregistered' && <RegisterMessage>
                            <p>რომ არ გადადო,<br/>ბარემ ახლავე დარეგისტრირდი</p>
                            <a target="_blank" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                        </RegisterMessage>}
                    {pick1 === 'no' ? <>
                        <h1>რას ელოდები?</h1>
                        <label>
                            <input type="radio" onClick={() => setPick2('waiting')} name="pick3" value='waiting'/>
                            დარეგისტრირებული ვარ და ველოდები თარიღს
                        </label>
                        <label>
                            <input type="radio" onClick={() => setPick2('notplanned')} name="pick3" value="notplanned"/>
                            არ ვგეგმავ
                        </label>
                        <label>
                            <input type="radio" value={'planned'} onClick={() => setPick2('planned')} name="pick3"  />
                            გადატანილი მაქვს და ვგეგმავ აცრას
                        </label>
                    </> : null}
                        {pick1 === 'no' && pick2 === 'notplanned' ? <RegisterMessage>
                            <FaHandPointRight style={{color: 'orange'}}/> <a target="_blank" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                        </RegisterMessage>: null}
                        {pick1 === 'no' && pick2 === 'planned' ? <RegisterMessage>
                            <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br/> თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
                            <br />
                            <FaHandPointRight style={ {color: 'orange'}} /> <a target="_blank" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
                        </RegisterMessage> : null}
                </RadioGroup>
                <div>
                    <IconDiv><img src={star} alt="" /></IconDiv>
                    <img src={doctor2} alt="doctor" />
                </div>
            </PageTwoContainer>
            <IconContext.Provider value={{size: '50px'}}>
                <ButtonContainer>
                    <Button style={{opacity: 1}}><Link to='/page-2'><GrFormPrevious /></Link></Button>
                    {(pick1 === 'yes' && pick2 === 'firstDose') || (pick1 === 'yes' && pick2 === 'vaccinated') || (pick1 === 'yes' && pick2 === 'notregistered') ? 
                    <Button style={{opacity: 1}}><Link to='page-4'><GrFormNext /></Link></Button> 
                    : (pick1 === 'no' &&  pick2 === 'planned') || (pick1 === 'no' && pick2 === 'notplanned') || (pick1 === 'no' && pick2 === 'waiting') ? 
                    <Button style={{opacity: 1}}><Link to='/page-4'><GrFormNext /></Link></Button> : <Button><GrFormNext /></Button>}
                </ButtonContainer>
            </IconContext.Provider>
        </>
    )
}

export default PageThree