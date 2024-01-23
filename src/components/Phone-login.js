import React, { useState } from 'react'
import OTPInput from './OTPInput'

function PhoneOTPForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();
        const regex = /^\d+$/;

        if (phoneNumber.length < 10 || !regex.test(phoneNumber)) {
            alert("Invalid Number");
            return;
        }
        setOtpSent(true);
    };

    return (
        <div>
            {!otpSent ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input type='text'
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder='Enter the Number' />
                    <button type='submit'>Submit</button>
                </form>) : (
                <div>
                    <p>Enter OTP sent to {phoneNumber}</p>
                    <OTPInput length={6}  />
                </div>)}
        </div>
    )
}

export default PhoneOTPForm
