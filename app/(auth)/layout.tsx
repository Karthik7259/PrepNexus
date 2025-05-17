

import { redirect } from 'next/navigation'
import { isAuthhenticated } from '@/lib/actions/auth.action'
import {ReactNode }from 'react'

const AuthLayout = async ({children} : {children : ReactNode}) => {
  
  const isUserAuthenticated=await isAuthhenticated()

  if(isUserAuthenticated) redirect('/')
  
  
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
} 

export default AuthLayout
