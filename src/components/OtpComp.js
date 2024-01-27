import React, { useEffect, useRef, useState } from 'react'

const OtpComp = ({ length, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''))
    const inputRefs = useRef([])
    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    },[])
    //console.log(inputRefs)
    const handleChange = (index, e) =>{
        const value = e.target.value;
        if (isNaN(value)) return;
    
        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        console.log(newOtp)
        setOtp(newOtp);

        // combined otp 
        const combinedOtp = newOtp.join('')
        if(combinedOtp.length ===length) onOtpSubmit(combinedOtp)        

        // to move into the next box
        if(value && index < length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus()
        }
    }

    const handleClick = (index) =>{
        inputRefs.current[index].setSelectionRange(1,1)
    }

    const handleKeyDown = (index, e) =>{
         
        if(e.key === "Backspace" && !otp[index] && inputRefs.current[index-1] && index>0){
            inputRefs.current[index-1].focus()
        }
    }

   
    return (
    <div className='flex justify-center items-center'>
        {
            otp.map((value, index)=>{return <input 
                className='border p-2 m-2 rounded-md h-20 w-20 text-center'
                ref={(input)=>(inputRefs.current[index]=input)}
                type='text'
                key={index} 
                onChange={(e)=>handleChange(index, e)}
                onClick={()=>handleClick(index)}
                onKeyDown={(e)=>handleKeyDown(index, e)}
                value={value}
                />})
        }
    </div>
  )
}

export default OtpComp