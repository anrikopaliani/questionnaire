import React, {useState} from 'react'
import {LogoContainer , Line, Button } from '../Global.styles'
import redberryLogo from '../../../images/Frame.svg'
import bike2 from '../../../images/bike2.svg'
import {GrFormPrevious} from 'react-icons/gr'
import { FormContainer, IconDiv, PageFourContainer } from './pageFour.styles'
import { Link } from 'react-router-dom'
import heart from '../../../images/heart.svg'

const PageFour = () => {
    const [pick1,setPick1] = useState(false)
    const [pick2,setPick2] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <LogoContainer>
                <img src={redberryLogo} alt="logo" />
                <p>4/4</p>
            </LogoContainer>
            <Line></Line>
            <PageFourContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <p>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით ბევრისთვის არის და ყოფილა წლების განმავლობაში ერთად მიზნებისთვის ბრძოლის მიზეზი,ბევრისთვის კი - ჩვენთან გადმოსვლის.</p>
                    <p> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.</p>
                    <h1>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</h1>
                    <label>
                        <input type="radio" onClick={() => setPick1(true)} name="pick" required/>
                        კვირაში ორჯერ
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick1(true)} name="pick" />
                        კვირაში ერთხელ
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick1(true)} name='pick' />
                        ორ კვირაში ერთხელ
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick1(true)} name="pick" />
                        თვეში ერთხელ
                    </label>
                    <h1>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</h1>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id=""  required/>
                        0
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id="" />
                        1
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id="" />
                        2
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id="" />
                        3
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id="" />
                        4
                    </label>
                    <label>
                        <input type="radio" onClick={() => setPick2(true)} name="pick2" id="" />
                        5
                    </label>
                    <h1>რას ფიქრობ ფიზიკურ შეკრებებზე?</h1>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                    <h1>რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h1>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    {pick1 && pick2 ? 
                        <button><Link style={{color:'white'}} to='/page-5'>დასრულება</Link></button> 
                    :
                        <button>დასრულება</button>}
                </FormContainer>
                <div>
                    <IconDiv>
                        <img src={heart} alt="" />
                    </IconDiv>
                    <img src={bike2} alt="bike" />
                </div>
            </PageFourContainer>
            <Button style={{opacity: 1}}><Link to='/page-3'><GrFormPrevious size="50"/></Link></Button>
        </>
    )
}

export default PageFour
