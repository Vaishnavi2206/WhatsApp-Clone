import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './Login.css'
import {useStateValue} from './StateProvider.js'
import {actionTypes} from './reducer.js'


function Login() {

    const [{},dispatch]=useStateValue();

    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__Container">
                <img 
                // width="100px"
                // height="100px"
                // src="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_1.png"
                //  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png"
                alt=""
                />

                <div className="login__text">
                    <h1>Sign In to WhatsApp!</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
