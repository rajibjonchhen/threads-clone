
interface Props {
    id : String,
    currentUserId : String,
    parentId: String | null,
    content: String,
    author: {
            name : String,
            image : String,
            id : String
        },
    community: {
            id : String,
            name : String,
            image : String

    } | null,
    createdAt : String,
    comments : {
        author : {
        image : String
    }[],
    isComment : Boolean
    }
}
function ThreadCard({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments 
}:Props) {
  return (
    <article className = "flex w-full flex-col rounded-x1 bg-dark-2 p-7">
        <h2 className = "text-small-regular text-light-2">
        {content}
            </h2>
            </article>
  )
}

export default ThreadCard