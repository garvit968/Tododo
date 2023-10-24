import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"


export const POST = async (req) =>{
    const { userID, prompt, tag} = await req.json()
    try {
        await connectToDB()
        const newPrompt = new Prompt({ creator: userID , prompt , tag })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {status:201})
    } catch (error) {
        return new Response("Failed to Create Prompt", { status: 500 })
    }
}

