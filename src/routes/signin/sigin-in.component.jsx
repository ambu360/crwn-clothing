import React from "react"
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const Signin = () => {

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    }

return (
    <div>
        <h1>This is the signin</h1>
        <button onClick={logGoogleUser}>
            SIgn in with google popup
        </button>
    </div>
)
}


export default Signin

