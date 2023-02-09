import React from "react";
import './Submit.css'
import thank from '../images/illustration-thank-you.svg'
const Submit = (props) =>{
    return(
        <>
            <div className='thanks-container'>
                <div className='img-thanks'>
                    <img src={thank} alt='thanks-img' id='thanks-logo'/>
                </div>
                <div className='user-rate'>
                    You rated {props.rate} of 5
                </div>
                <div className='thanks-header'>
                    <h2>Thank You!</h2>
                </div>
                <div className='thanks-content'>
                    We appreciate you taking the time to give a rating.
                    if you ever need more support, don't hesitate to get in touch!
                </div>
            </div>
        </>
    );
}

export default Submit;