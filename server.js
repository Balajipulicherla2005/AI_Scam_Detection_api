// const express = require("express")
// const cors = require("cors")
// const scamRoutes = require("./routes/scamRoutes")

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use("/api", scamRoutes)

// app.listen(5000, () => {
//     console.log("Server running on port 5000")
// })





// const express = require("express")
// const cors = require("cors")
// const dotenv = require("dotenv")
// const OpenAI = require("openai")

// const scamRoutes = require("./routes/scamRoutes")

// dotenv.config()

// const app = express()

// app.use(cors())
// app.use(express.json())

// // Existing scam detection API
// app.use("/api", scamRoutes)


// // ================= AI CHATBOT API =================

// const openai = new OpenAI({
// apiKey: process.env.OPENAI_API_KEY
// })

// app.post("/api/chatbot", async (req,res)=>{

// const { message } = req.body

// try{

// const completion = await openai.chat.completions.create({
// model: "gpt-4o-mini",
// messages: [
// {
// role: "system",
// content: "You are a cybersecurity AI assistant that helps users detect scams and explain if a message is safe or dangerous."
// },
// {
// role: "user",
// content: message
// }
// ]
// })

// res.json({
// reply: completion.choices[0].message.content
// })

// }catch(error){

// console.error(error)

// res.status(500).json({
// error: "AI chatbot error"
// })

// }

// })

// // ==================================================


// app.listen(5000, () => {
// console.log("Server running on port 5000")
// })









// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import OpenAI from "openai"

// import scamRoutes from "./routes/scamRoutes.js"
// import chatbot from "./routes/chatbot.js"

// dotenv.config()

// const app = express()

// app.use(cors())
// app.use(express.json())

// // Scam Detection API
// app.use("/api", scamRoutes)

// // Chatbot API
// app.use("/api", chatbot)


// // ================= AI CHATBOT WITH OPENAI =================

// const openai = new OpenAI({
// apiKey: process.env.OPENAI_API_KEY
// })

// app.post("/api/ai-chat", async (req,res)=>{

// const { message } = req.body

// try{

// const completion = await openai.chat.completions.create({
// model: "gpt-4o-mini",
// messages: [
// {
// role: "system",
// content: "You are a cybersecurity AI assistant that helps users detect scams and explain if a message is safe or dangerous."
// },
// {
// role: "user",
// content: message
// }
// ]
// })

// res.json({
// reply: completion.choices[0].message.content
// })

// }catch(error){

// console.error(error)

// res.status(500).json({
// error: "AI chatbot error"
// })

// }

// })

// // ===========================================================

// app.listen(5000, () => {
// console.log("🚀 Server running on port 5000")
// })




// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import OpenAI from "openai"

// import scamRoutes from "./routes/scamRoutes.js"
// import chatbot from "./routes/chatbot.js"

// dotenv.config()

// const app = express()

// app.use(cors())
// app.use(express.json())

// // ================= ROUTES =================

// // Scam Detection API
// app.use("/api", scamRoutes)

// // Optional chatbot route
// app.use("/api", chatbot)


// // ================= OPENAI SETUP =================

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// })


// // ================= AI CHATBOT API =================

// app.post("/api/ask-ai", async (req, res) => {

//   try {

//     const { message } = req.body

//     if(!message){
//       return res.status(400).json({
//         error: "Message is required"
//       })
//     }

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: "You are a cybersecurity AI assistant that helps users detect scams and explain if a message is safe or dangerous."
//         },
//         {
//           role: "user",
//           content: message
//         }
//       ]
//     })

//     res.json({
//       reply: completion.choices[0].message.content
//     })

//   } catch (error) {

//     console.error("AI Error:", error)

//     res.status(500).json({
//       error: "AI Server Error"
//     })
//   }

// })


// // ================= SERVER =================

// app.listen(5000, () => {
//   console.log("🚀 Server running on port 5000")
// })








import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Groq from "groq-sdk"

import scamRoutes from "./routes/scamRoutes.js"
import chatbot from "./routes/chatbot.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// ================= ROUTES =================

// Scam Detection API
app.use("/api", scamRoutes)

// Optional chatbot route
app.use("/api", chatbot)


// ================= GROQ AI SETUP =================

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})


// ================= AI CHATBOT API =================

app.post("/api/ask-ai", async (req, res) => {

  try {

    const { message } = req.body

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      })
    }

    const chat = await groq.chat.completions.create({
     model: "llama-3.1-8b-instant",
        messages: [
        {
          role: "system",
          content: "You are a cybersecurity AI assistant that helps users detect scams and explain if a message is safe or dangerous."
        },
        {
          role: "user",
          content: message
        }
      ]
    })

    res.json({
      reply: chat.choices[0].message.content
    })

  } catch (error) {

    console.error("AI Error:", error)

    res.status(500).json({
      error: "AI Server Error"
    })

  }

})


// ================= SERVER =================

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000")
})