import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { IconDiv, PageTwoContainer, RadioGroup,ErrorMessage } from './pageTwo.styles'
import vaccinate from '../../../images/vaccinate2.svg'
import { LogoContainer,Line,ButtonContainer,Button } from '../Global.styles'
import redberryLogo from '../../../images/Frame.svg'
import { Link } from 'react-router-dom'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'


const PageTwo = () => {
    const [picked,setPicked] = useState('')
    const [picked2,setPicked2] = useState('')
    const formik = useFormik({
        initialValues: {
            antibody: '',
            antibodyTest: '',
            antibodyNum: '',
            covid: ''
        },
        validationSchema: Yup.object({
            antibodyTest: Yup.date().required('თარიღი სავალდებულოა'),
            antibodyNum: Yup.string().matches(/^\d+$/,'შეიყვანეთ რიცხვითი მნიშნელობა').required('ანტისხეულების რაოდენობის შეყვანა სავალდებულოა'),
            covid: Yup.string().required('თარიღის შეყვანა სავალდებულოა')
        })

    })

    const handleClick = (value) => {
        if(value === 'yes'){
            setPicked(value)
        } else if(value === 'no') {
            setPicked(value)
            setPicked2('')
        } else if (value === 'now') {
            setPicked(value)
            setPicked2('')
        }
    }

    return (
    <>
        <LogoContainer>
            <img src={redberryLogo} alt="" />
            <p>2/4</p>
        </LogoContainer>
        <Line></Line>
        <PageTwoContainer>
            <RadioGroup>   
                <h1>გაქვს გადატანილი Covid-19?*</h1>
                <label>
                    <input type="radio" onClick={() => handleClick('yes')} name="picked" value="yes"/>
                    კი
                </label>
                <label>
                    <input type="radio" onClick={() => handleClick('no')}  name="picked"  value="no"/>
                    არა
                </label>
                <label>
                    <input type="radio" onClick={() => handleClick('now')} name="picked"  value="now"/>
                    ახლა მაქვს
                </label>
                {picked === 'yes' && <>
                    <h1>ანტისხეულების ტესტი გაქვს გაკეთებული?*</h1>
                    <label>
                        <input type="radio" name="picked2" onClick={() => setPicked2('yes')}/>
                        კი
                    </label>
                    <label>
                        <input type="radio" name="picked2" onClick={() => setPicked2('no')}/>
                        არა
                    </label>
                </>}
                { picked2 === 'yes' && picked === 'yes' ? <>
                        <h1>თუ გახსოვს, გთხოვ მიუთითე მიახლოებითი თარიღი და რაოდენობა ანტისხეულების*</h1>
                        <br />
                        <input type="date" placeholder="რიცხვი" {...formik.getFieldProps('antibodyTest')}/>
                        {formik.errors.antibodyTest && formik.touched.antibodyTest ? 
                        <ErrorMessage>{formik.errors.antibodyTest}</ErrorMessage> : null}
                        <br/>
                        <input type="text" {...formik.getFieldProps('antibodyNum')} placeholder="ანტისხეულების რაოდენობა"/> 
                        {formik.errors.antibodyNum && formik.touched.antibodyNum ? 
                        <ErrorMessage>{formik.errors.antibodyNum}</ErrorMessage> : null}
                        </> : null
                    }
                    {picked==='yes' && picked2 === 'no'? <>
                        <h1>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი), როდის გქონდა Covid-19*
                        </h1>
                        <br />
                        <input type="date" {...formik.getFieldProps('covid')} name="covid" placeholder="დდ/თთ/წწ"/>
                        {formik.errors.covid && formik.touched.covid ? <ErrorMessage>{formik.errors.covid}</ErrorMessage>: null}
                    </> : null}
            </RadioGroup>
            <div>
                <IconDiv></IconDiv>
                <img src={vaccinate} alt="" />
            </div>                
        </PageTwoContainer> 
        <ButtonContainer>
            <Button style={{opacity: 1}}><Link to='/page-1'><GrFormPrevious size="50"/></Link></Button>
            {picked === 'no' || picked === 'now' ? 
            <Button style={{opacity: 1}}><Link to="/page-3"><GrFormNext size="50"/></Link></Button> 
            : 
            picked === 'yes' && picked2 === 'no' && !formik.errors.covid  && formik.touched.covid ? <Button style={{opacity: 1}}><Link to="/page-3"><GrFormNext size="50"/></Link></Button> 
            :
            picked === 'yes' && picked2 === 'yes' && !formik.errors.antibodyTest && formik.touched.antibodyTest && !formik.errors.antibodyNum  ? 
            <Button style={{opacity: 1}}><Link to='/page-3'><GrFormNext size="50"/></Link></Button>
            : 
            <Button><GrFormNext size="50"/></Button>
            }     
        </ButtonContainer>
                    
    </>
    )
}

export default PageTwo
