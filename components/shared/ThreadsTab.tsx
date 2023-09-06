import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props {
    currentUserId : string;
    accountId : string;
    accountType : string;
}
async function ThreadsTab({
    currentUserId,
    accountId,
    accountType,
}:Props) {

    let result = await fetchUserPosts(accountId)
    console.log("🚀 ~ file: ThreadsTab.tsx:17 ~ result:", result)

    if(!result) redirect("/")
  return (
    <section>
      {result.threads.map((thread :any) => (
          <ThreadCard 
          key = {thread._id}
          id = {thread._id}
          currentUserId = {currentUserId}
          parentId = {thread.parentId}
          content = {thread.text}
          author = {accountType === "User"? {name : result.name, image : result.image, id : result.id}
          :{name : thread.author.name, image : thread.author.image, id : thread.author.id }
        }
          community = {thread.community}
          createdAt = {thread.createdAt}
          comments = {thread.children}
          isComment={thread.isComment}
          />
      ))}
    </section>
  )
}

export default ThreadsTab
