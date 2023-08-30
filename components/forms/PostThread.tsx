"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { createThread } from '@/lib/actions/thread.actions';
import { ThreadValidation } from '@/lib/validation/thread';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
interface Props {
    user : {
        id : string
        objectId : string,
        username : string,
        name : string,
        bio : string,
        image : string,
    },
    btnTitle : string
}

function PostThread ({userId}:{userId:string}){

  const pathname = usePathname()
  const router = useRouter()

  const form  = useForm({
        resolver : zodResolver(ThreadValidation),
        defaultValues : {
            thread : "",
            accountId : userId
        }
    })

    async function onSubmit(values :z.infer<typeof ThreadValidation>){
        await createThread({})
    }
    return (
        <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="mt-10 flex flex-col justify-start gap-10">

        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl  className="no-focus border border-dark-4 bg-dark-3 text-light-1 ">
                <Textarea  
                rows = {15}
               
                {...field}/>
              </FormControl>
                  <FormMessage/>         
            </FormItem>
          )}
        />
        <Button type = "submit" className = "bg-primary-500">
            Post Thread
        </Button>
         </form>
         </Form>
        )
}
export default PostThread