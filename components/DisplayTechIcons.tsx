import {cn, getTechLogos } from '@/lib/utils'
import { Slice } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DisplayTechIcons = async({techStack}: TechIconProps) => {
 
    const techIcons=await getTechLogos(techStack)


  return (
    <div className='flex flex-row '>
      {techIcons.slice(0,3).map(({tech,url},index) => (        
               <div key={tech} className={cn('relative group bg-dark-300 rounded-full p-2 flex items-center justify-centera',index >=1 && '-ml-3')}>
                 <span className='tech-tooltip invisible group-hover:visible absolute -top-8 p-2 rounded bg-dark-400 text-xs whitespace-nowrap'>
                   {tech}
                 </span>
                 <Image src={url} alt={tech} width={100} height={100} className='size-5' />
               </div>
      ))}
     </div>
  )
}

export default DisplayTechIcons
