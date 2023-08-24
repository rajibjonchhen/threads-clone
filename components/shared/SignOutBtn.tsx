"use client"

import { SignOutButton, SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"

function SignOutBtn({label} :{label : Boolean}) {
    const router = useRouter()
  return (
    <SignedIn>
            <SignOutButton signOutCallback = {() => router.push('/sign-in')}>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image src = '/assets/logout.svg' alt = 'logout' width = {24} height = {24}/>
                {label && <p className ="text-light-1 max-lg:hidden">Log out</p>}

              </div>
            </SignOutButton>
        </SignedIn>
  )
}

export default SignOutBtn
