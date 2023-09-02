"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '../ui/button';
import { CommentValidation } from '@/lib/validation/thread';
import { Input } from '../ui/input';
import Image from 'next/image';

interface Props {
    threadId : string,
    currentUserImage : string,
       currentUserId : string,
}
function Comment({        
    threadId,
    currentUserImage,
    currentUserId
    }:Props) {

        const pathname = usePathname()
        const router = useRouter()
      
        const form  = useForm({
              resolver : zodResolver(CommentValidation),
              defaultValues : {
                  thread : "",
              }
          })
      
          async function onSubmit(values :z.infer<typeof CommentValidation>){
            //   await createThread({
            //      text : values.thread,
            //      author : userId,
            //      communityId : null,
            //      path : pathname
            //   })
      
              router.push("/")
          }
    return ( 
        <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="comment-form">

        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex  gap-3 w-full item-center">
              <FormLabel>
                <Image
                    src = {currentUserImage}
                    width = {48}
                    height = {48}
                    alt = "profile image"
                    className = "rounded-full object-cover"
                />
              </FormLabel>
              <FormControl  className="border-none bg-transparent">
                <Input 
                className = "no-focus text-light-1 outline-none" 
                type = "text"
                placeholder = "Comment..."
                {...field}/>
              </FormControl>
                  <FormMessage/>         
            </FormItem>
          )}
        />
        <Button type = "submit" className = "comment-form_btn">
            Reply
        </Button>
         </form>
         </Form>
     );
}

export default Comment;