import Link  from 'next/link'
import Image from 'next/image'
import React,{ReactNode} from 'react'
import { isAuthhenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({children} : {children : ReactNode}) => {
  
  const isUserAuthenticated=await isAuthhenticated()

  if(!isUserAuthenticated) redirect('/sign-in')
  
  return (
    <div className='root-layout'>
     <nav>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logoprep.png' alt='logo' width={200} height={40} />
        </Link>
     </nav>
     {children}
    </div>
  )
}

export default RootLayout
