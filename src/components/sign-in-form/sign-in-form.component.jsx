import "./sign-in-form.styles.scss";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInUsingEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await singInUsingEmailAndPassword(email,password)
      console.log(response);
      resetFormFields()
    }catch(error){

     switch(error.code){
      case 'auth/user-not-found':
        alert('user not found')
        break;
      default:
        console.log(error);
        break;
     }
      
    }
  };

  
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
 

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in using email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
        <Button type="submit">Sign In!!</Button>
        <Button type='button' onClick={signInWithGoogle} buttonType='google'>Sign in with google</Button>
      
        </div>
        </form>
    </div>
  );
};

export default SignInForm;
