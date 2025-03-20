"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import emailjs from '@emailjs/browser';


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email:z.string().email("Enter a Valid E-Mail ID !"),
  phone:z.coerce.number({message:"Please Provide a valid Mobile Number"}),
  budget:z.coerce.number().min(500,{message:"It's too low!"}),
  projectDetails:z.string().min(10,{message:"Please Provide more details"})

})

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",

    },

  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

        const service_id = 'service_gxz9sm8'
        const template_id = 'template_2h41989'
        const public_key = 'emtVCf7DKKt-U0J5j'
        const templateParams ={
            from_name: values.name,
            from_email: values.email,
            from_phone: values.phone,
            budget: values.budget,
            to_name : 'Glyptika',
            message:values.projectDetails,    
        }
        emailjs.send(service_id, template_id, templateParams, public_key).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
        )


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-flow-row-dense grid-cols-2 grid-rows-4 gap-5 space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name Here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="E-Mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No.</FormLabel>
              <FormControl>
                <Input placeholder="Phone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget</FormLabel>
              <FormControl>
                <Input placeholder="What's Your Budget ?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem className="col-span-2 gap-0 row-span-2">
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Input className="h-full max-w-full overflow-hidden p-1"  placeholder="Describe Your Project...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <div className="col-span-2 flex justify-center items-center gap-4">
          <Button type="submit" className="bg-[#5EC2B5] col-start-1.5  rounded-3xl  " >Submit</Button>

        </div>
        </form>
    </Form>
  )
}
