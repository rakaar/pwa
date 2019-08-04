import React, { Component } from 'react'
import '../Styles/SignModal.scss'
import SignIn from './SignIn'
import SignUp from './SignUp'

export class SignModal extends Component {

    state = {
        showSignInForm: true
    }
   
    showSignIn = () => {
        this.setState({ showSignInForm: true })
    }

    showSignUp = () => {
        this.setState({ showSignInForm: false })
    }
    
    render() {
        return (
            <div this className="modal-wrapper">
                <h2 onClick={this.showSignIn} className="modal-title" > Sign In </h2>
                <h4 onClick={this.showSignUp} className="modal-toggle"> or <a href="#"> Sign Up</a></h4>
    
             { (this.state.showSignInForm) ? <SignIn /> : <SignUp />}
                
            </div>
        )
    }
}

export default SignModal
