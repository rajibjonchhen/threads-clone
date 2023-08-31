"use server"

import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
 
export default async function Home() {
  const  user = await currentUser()
  const {posts}  = await fetchPosts(1, 30)
  console.log("🚀 ~ file: page.tsx:6 ~ Home ~ posts:", posts)
  return (
    <>
      <h1 className="text-white">Home</h1>
      <section className = "mt-9 flex flex-col gap-10">
        {posts.length === 0? 
        (<p>No threads found</p>)
        :(
          <>
            {posts.map((post) => (
              <ThreadCard 
                key = {post._id}
                id = {post._id}
                currentUserId = {user?.id || ""}
                parentId = {post.parentId}
                content = {post.text}
                author = {post.author}
                community = {post.community}
                createdAt = {post.createdAt}
                comments = {post.children}
                
                />
            ))}
          </>
        )
      }
      </section>

    </>
  )
}