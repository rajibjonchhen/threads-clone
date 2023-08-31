import Image from "next/image"
import Link from "next/link"

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
        <div className="flex item-start justify-between">
            <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col item-center">
                    <Link className = "relative h-11 w-11"
                    href = {`/profile/${author.id}`}>
                        <Image 
                            className = "cursor-pointer rounded"
                            src = {author.image} 
                            alt = "profile image"
                            fill

                        />
                    </Link>
                    <div className = "thread-card_bar"/>
                </div>
                    <div className = "flex w-full flex-col">
                    <Link className = "relative h-11 w-11"
                    href = {`/profile/${author.id}`}>
                        <h4 className = "cursor-pointer text-base-semibold text-light-1">{author.name}</h4>
                    </Link>
                    <p className="mt-2 text-small-regular text-light-2">

                    </p>
                    </div>
            </div>
        </div>
        <h2 className = "text-small-regular text-light-2">
        {content}
        </h2>
    </article>
  )
}

export default ThreadCard