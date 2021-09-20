import React from 'react'
import * as Yup from 'yup'
import { FormContainer, PageOneContainer, ErrorMessage, IconDiv } from './pageOne.styles'
import scan2 from '../../../images/scan2.svg'
import {GrFormNext} from 'react-icons/gr'
import { useFormik } from 'formik'
import { Button, LogoContainer, Line} from '../Global.styles'
import redberryLogo from '../../../images/Frame.svg'
import { Link } from 'react-router-dom'

const PageOne = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup
            .string()
            .matches(/^[aA-zZაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ\s]+$/,'სახელის ველი უნდა შეიცავდეს ანბანის ასოებს').min(3,'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოგან')
            .max(255,'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან')
            .required('სახელის ველი სავალდებულოა'),
            lastName: Yup
            .string()
            .matches(/^[aA-zZაბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ\s]+$/,'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს')
            .min(3,'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან')
            .max(255,'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან')
            .required('გვარის ველი სავალდებულოა'),
            email: Yup
            .string()
            .email('თქვენს მიერ შეყვანილი მეილი არასწორია')
            .matches(/^[\w-\.]+@redberry.ge$/,'გთხოვთ დარეგისტრირდეთ რედბერის მეილით (youremail@redberry.ge)')
            .required('მეილის ველი სავალდებულოა')
        })
    })
    
    return (
    <>
        <LogoContainer>
            <img src={redberryLogo} alt="" />
            <p>1/4</p>
        </LogoContainer>
        <Line></Line>
        <PageOneContainer>
            <FormContainer>
                <h1>სახელი*</h1>
                <input type="text" placeholder="იოსებ" id="firstName" {...formik.getFieldProps('firstName')}/>
                {formik.touched.firstName && formik.errors.firstName ? 
                (<ErrorMessage>{formik.errors.firstName}</ErrorMessage>) : null}
                
                <h1>გვარი*</h1>
                <input type="text" placeholder="ჯუღაშვილი" id="lastName" {...formik.getFieldProps('lastName')}/>
                {formik.touched.lastName && formik.errors.lastName ? 
                (<ErrorMessage>{formik.errors.lastName}</ErrorMessage>) : null}

                <h1>მეილი*</h1>
                <input type="text" placeholder="fbi@redberry.ge" id="email" {...formik.getFieldProps('email')}/>
                {formik.touched.email && formik.errors.email ? 
                (<ErrorMessage>{formik.errors.email}</ErrorMessage>) : null}
            </FormContainer>
            <div>
                <IconDiv></IconDiv>
                <img src={scan2} alt="" />
            </div>
        </PageOneContainer>

        {formik.touched.firstName && formik.touched.lastName &&!formik.errors.firstName && !formik.errors.lastName && !formik.errors.email ?
        <Button style={{opacity: 1}}><Link to='/page-2'><GrFormNext size="50"/></Link></Button> 
        : 
        <Button><GrFormNext size="50"/></Button> }
    </>

    )
}

export default PageOne




