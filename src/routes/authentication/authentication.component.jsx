
import './authentication.styles.scss'
import React from "react";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Signin = () => {
  return (
    <div className='authentication-container'>
     
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Signin;
