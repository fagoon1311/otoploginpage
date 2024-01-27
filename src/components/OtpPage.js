import React, { useState } from 'react'
import OtpComp from './OtpComp'

const OtpPage = () => {
    const [mobileNum , setMobileNum] = useState('')
    const [showOtp, setShowOtp] = useState(false)
    const handlePhoneSubmit = (e) =>{
        e.preventDefault()
        // checking if phone number is valid 
        const regexexp = /^[0-9]+$/;
        if(mobileNum.length < 10 || !regexexp.test(mobileNum)) {
            alert("invalid mobile number")
        }
        setShowOtp(true)
    
    }
    const onOtpSubmit = (otp) => {
        alert("Succesful login with " + otp)
    }

  return (
    
    <div className='flex items-center justify-center p-2'>
        {!showOtp ? 
        <form onSubmit={handlePhoneSubmit}>
            <input type='text' 
            className='border rounded-lg px-2 w-72'
            placeholder='Enter your 10 digit mobile number' 
            onChange={(e)=>{setMobileNum(e.target.value)}}
            value={mobileNum}
            >
            </input>
            <button type='submit' className='border rounded-md px-2 bg-slate-200 mx-2'>Submit</button>
        </form> : <div className='flex flex-col'>
            <h4 className='text-center'> Enter the OTP sent to {mobileNum}</h4>
        <OtpComp length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
        }
    </div>
  )
}

export default OtpPage