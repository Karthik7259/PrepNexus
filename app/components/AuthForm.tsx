"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { useRouter } from "next/navigation";
import Image from "next/image"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import FormField from "./FormField"

type FormType = "sign-in" | "sign-up"

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter()
  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
         toast.success("Account created successfully")
         router.push("/sign-in")
        console.log("sign up", values)
      } else {
            toast.success("Logged in successfully")
        router.push("/")
      }
    } catch (error) {
      console.log(error)
      toast.error(`There was a error : ${error}`)
    }
  }

  const isSignIn = type === "sign-in"

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image 
            src="/logoprep.png" 
            alt="logoprep" 
            width={180}
            height={200}
            className="scale-150"
          />
        </div>
        <h3 className="text-center">
          Practice job interviews with AI  
        </h3>
      
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
               <FormField 
               control={form.control}
                name="name"
                label="Name" 
               placeholder="Your Name"
               />
            )}
            <FormField 
               control={form.control}
                name="email"
                label="Email" 
               placeholder="Your Email"
                type="email"
               />
            <FormField 
               control={form.control}
               name="password"
                label="Password" 
               placeholder="Enter Your Password"
                type="password"
               />
            

            <Button className="btn w-full" type="submit">
              {type === "sign-in" ? "Sign In" : "Create an account"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"} 
          <Link 
            className="font-bold text-user-primary ml-1" 
            href={isSignIn ? "/sign-up" : "/sign-in"}
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
