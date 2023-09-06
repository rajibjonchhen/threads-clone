import Image from "next/image"
import Link from "next/link"

interface Props {
    id : string,
    currentUserId : string,
    parentId: string | null,
    content: string,
    author: {
            name : string,
            image : string,
            id : string
        },
    community: {
            id : string,
            name : string,
            image : string

    } | null,
    createdAt : string,
    comments : {
        author : {
        image : string
    },
}[]
isComment : Boolean
}
function ThreadCard({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment 
}:Props) {
  return (
    <article className = {`flex w-full flex-col rounded-  ${isComment? "px-0 xs:px-7" : "bg-dark-2 p-7"}`}>
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
                    {content}
                    </p>
                    <div className = "mt-5 flex flex-col gap-3 ">
                        <div className = "flex gap-3.5">
                            <Image className="cursor-pointer object-contain" src ="/assets/heart-gray.svg" width = {24} height = {24} alt = ""/>
                            <Link href = {`/thread/${id}`}>
                                <Image className="cursor-pointer object-contain" src ="/assets/reply.svg" width = {24} height = {24} alt = ""/>
                            </Link>
                            <Image className="cursor-pointer object-contain" src ="/assets/repost.svg" width = {24} height = {24} alt = ""/>
                            <Image className="cursor-pointer object-contain" src ="/assets/share.svg" width = {24} height = {24} alt = ""/>
                        </div>
                        {isComment && comments.length > 0  && (
                            <Link href = {`/thread/${id}`}>
                                <p className = "mt-1 text-subtle-medium text-gray-1">
                                    {comments.length} replies
                                </p>
                            </Link>
                        )

                        }
                    </div>
                    </div>
            </div>
        </div>
       
    </article>
  )
}

export default ThreadCard