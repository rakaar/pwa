import React, { Component } from 'react'
import '../Styles/Footer.scss'

export class Footer extends Component {
    render() {
        return (
            <div className="footer-w">
                <div className="lined-t"><h2 className="lft">IIT Technology Ambit</h2></div>
                <div className="fg-w">
                    <div className="lg-f">
                        <p> Privacy Policy </p>
                        <p> Terms and Conditions </p>
                        <p> About </p>
                    </div>
                    <div className="mg-f">
                        <i class='fa fa-facebook-square fa-2x' aria-hidden='false' />
                        <i class='fa fa-instagram fa-2x' aria-hidden='false' />
                        <i class='fa fa-medium fa-2x' aria-hidden='false' />
                        <i class='fa fa-github-square fa-2x' aria-hidden='false' />
                    </div>
                    <div className="rg-f"> 
                        <p> IIT Kharagpur </p>
                        <p> Kharagpur, 721302 </p>
                        <p> wb, india  </p>
                        <p> +91-8969169656 </p>
                        <p className="mail-ft"> devops@iit-techambit.in </p>
                    </div>
                </div>
                <div className="vl-f"><p className="cs-f"> Subscription Coming soon </p></div>
                <div className="crt-f"> © IIT Technology Ambit 2019 </div>
            </div>
        )
    }
}

export default Footer
