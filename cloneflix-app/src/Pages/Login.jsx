import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import './scss/Login.scss';
import logo from '../Images/cloneflix.png'

const Login = () => 
{
   const navigate = useNavigate();
   const formik = useFormik(
      {
       initialValues: 
       {
       email: '',
       password: '',
       },
       validationSchema: Yup.object(
           {
               email: Yup.string().email('Invalid email address')
                   .required('Required'),
               password: Yup.string()
                   .max(15, 'Must be 15 characters or less')
                   .required('Required')
           }),
    onSubmit: values =>
    {
       navigate(`/dashboard`);
    },
  });
  return (
   <div className="login">
              <header>
                   <div className="header-logo">
                    <img src={ logo } alt="cloneflix" />
                   </div>
               </header>

       <div className="container">
           <form 
           className='form'
           onSubmit={ formik.handleSubmit }>
       
           
           <input
               id="email"
               name="email"
               type="email"
               placeholder='Email or phone number'
               onChange={ formik.handleChange }
               onBlur={ formik.handleBlur }
               value={ formik.values.email }
           />

           { formik.touched.email && formik.errors.email ? (
               <div>{ formik.errors.email }</div>
           ) : null }

           
           <input
               id="password"
               name="password"
               type="password"
               placeholder='Password'
               onChange={ formik.handleChange }
               onBlur={ formik.handleBlur }
               value={ formik.values.password }
           />

           { formik.touched.password && formik.errors.password ? (
               <div>{ formik.errors.password }</div>
           ) : null }
       
           <button 
           type="submit"
           className="login-button"
           >
               <Link to="/dashboard"/>
               <b>Sign In</b>
               </button>

           <span>New to Cloneflix? <Link to="/">Sign up now.</Link></span>
                           
               <small>2022, Deutschland - This is a final project from Single Page Application(SPA) at DCI.
               <b>Learn more.</b>
               </small>
           </form>
       </div>
    </div>);
};

export default Login;