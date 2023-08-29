import { currentUser } from "@clerk/nextjs"
async function Page() {
    const user = await currentUser()
    if(!user) return null
    const userInfo = await fetchUser(user.id)
   return <h1></h1>
}

export default Page