import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/ui/InterviewCard'
const page = () => {
  return (
    <>
    <section className='card-cta flex flex-row items-center justify-between gap-8 p-8'>
          <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p className='text-lg'>
              practice on real interviews questions and get instant feedback on your performance.
            </p>
            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href="/interview">Start an Interview</Link>
            </Button>
          </div>

          <Image 
            src="/robo.png" 
            alt="robo-dude" 
            width={400} 
            height={400} 
            className="max-sm:hidden object-contain" 
            priority
          />
    </section>
    <section className='flex flex-col gap-6 mt-8'>
    <h2>Your Interviews</h2>
    <div className='interviews-section'>
      {dummyInterviews.map((interview) => (
         <InterviewCard 
           {...interview} 
           key={interview.id}
         />
      ))}
    </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>Take an Interview </h2>
      <div className='interviews-section'>
           {dummyInterviews.map((interview)=>(
         <InterviewCard 
         {...interview} 
         key={interview.id}
         />
      ))}

      {/* <p>You havent taken any interviews yet </p> */}
      </div>
    </section>
    </>
  )
}

export default page
