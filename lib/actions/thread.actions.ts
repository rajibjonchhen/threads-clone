import { connectToDB } from "../mongoose"
import { ThreadValidation } from "../validation/thread"
import Thread from "../models/thread.model"

interface Params {
    text : string,
    author : string,
    community : string,
    path : string
}
export async function createThread({}:Params){
    connectToDB()
    
    const createdThread = await Thread.create()
}