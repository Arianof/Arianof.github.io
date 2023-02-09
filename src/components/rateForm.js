import React from "react";
import {useState} from "react";
import './form.css'
import star from '../images/icon-star.svg'
import Submit from "./submit";
const RateForm = () =>{
    const[rate , setRate] = useState(0);
    const[isSubmitted, setIsSubmitted] = useState(false);
    const handle = (e) =>{
        setRate(e.target.value);
    }
    const submit = (event) =>{
        event.preventDefault();
        setIsSubmitted(true);
    }

    return(
        <>
            { !isSubmitted &&  (
                <div className='container'>
                    <img className='star-icon' src={star} alt='star-icon' />
                    <h3>How did we do?</h3>
                    <p>please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <form onSubmit={submit}>
                        <div className='rate-box'>
                            <input type='radio' name='rating' id='5-star'  value='5' onClick={(event) => {
                                handle(event);
                            }}/>
                            <label htmlFor='5-star'>5</label>
                            <input type='radio' name='rating' id='4-star'  value='4' onClick={(event) => {
                                handle(event);
                            }}/>
                            <label htmlFor='4-star'>4</label>
                            <input type='radio' name='rating' id='3-star'  value='3' onClick={(event) => {
                                handle(event);
                            }}/>
                            <label htmlFor='3-star'>3</label>
                            <input type='radio' name='rating' id='2-star'  value='2' onClick={(event) => {
                                handle(event);
                            }}/>
                            <label htmlFor='2-star'>2</label>
                            <input type='radio' name='rating' id='1-star'  value='1' onClick={(event) => {
                                handle(event);
                            }}/>
                            <label htmlFor='1-star'>1</label>
                        </div>
                        <div className='submit-input'>
                            <input type='submit'/>
                        </div>
                    </form>
                </div>)}
            { isSubmitted && (<Submit rate={rate} />) }
        </>
    );

}


export default RateForm;