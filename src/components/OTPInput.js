import React, { useEffect, useRef, useState } from 'react'
import styles from './OTPinput.module.css'

function OTPInput(props) {
    const [otp, setOtp] = useState(new Array(props.length).fill(""));
    const inputRef = useRef([]);
    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus();
        }
    },[]);

    const handlechange = (index, e) => {
        const value = e.target.value;

        if(isNaN(value)){
            return;
        }
        const newOTp =[...otp];
        newOTp[index] = value.substring(value.length -1);
        setOtp(newOTp);

        const combineOTP = newOTp.join('');
        if(combineOTP.length ===props.length){
            props.onOptSubmit(combineOTP);
        }
        
        if(value && index<props.length-1 && inputRef.current[index+1]){
            inputRef.current[index+1].focus();
        }
    }
    const handleClick = () => {

    }
    const handleKeyDown = () => {

    }
    return (
        <div>
            {
                otp.map((value, index) => {
                    return (
                        <input type='text'
                            key={index}
                            value={value}
                            ref={(focusInput)=>(inputRef.current[index]=focusInput)}
                            onChange={(e) => handlechange(index, e)}
                            onClick={handleClick}
                            onKeyDown={handleKeyDown}
                            className={styles['OTP-Input']}
                        />
                    );
                }
            )}
        </div>
    )
}

export default OTPInput
