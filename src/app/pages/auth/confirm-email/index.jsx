import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from 'store';

export const ConfirmEmail = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    const {AuthStore: {verifyEmail}} = useStore();
    const navigate = useNavigate();
    useEffect(() => {
     const verify = verifyEmail(email,token)
     if(verify.status){
        navigate("/login");
     }else{
        
     }
    },[verifyEmail])
    
  return (
    <div>verifying</div>
  )
}
