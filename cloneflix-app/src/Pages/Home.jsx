import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import './scss/Home.scss';
import logo from '../Images/cloneflix.png';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


 
 const Home = () =>
 {  
     const navigate = useNavigate();
    
    function handleClick(event)
    {
        event.preventDefault();

        navigate(`/login`)
    }

    const formik = useFormik({
        initialValues: {
        email: '',
        },
        validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(`Dankeschön! Wir haben Ihnen ( ${ formik.values.email } ) eine E-mail geschickt.`)
            navigate(`/login`)
        },
    });
    return (
        <div className="home">
                <header>
                    <div className="header-logo">
                        <img src={ logo } alt="cloneflix" />   
                    </div>
                    <div className="button">
                    <button 
                    className='login-button'
                    onClick={ handleClick }>
                        Einloggen</button> 
                    </div>
                </header>
            <div className="container">

                <h1>Unbegrenzt Filme, Serien und mehr</h1>
                <h2>Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.</h2>
                <p>
                    Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren.
                </p>

                <form
                className="input" 
                onSubmit={ formik.handleSubmit }>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='E-mail-Addresse'
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    value={ formik.values.email }
                />

                {formik.touched.email && formik.errors.email ? (
                    <div className='info'>{ formik.errors.email }</div>
                ) : null }

                <button 
                type="submit"
                className='registerButton'
                >
                    Loslegen
                    <span><FontAwesomeIcon 
                                icon={ faChevronRight }
                                style={{ fontSize: 10}}  />
                            </span> 
                </button>
                </form>
            </div>
        </div>
    );
 };
 export default Home;