// const express = require("express")

// const router = express.Router()

// router.post("/check", (req,res)=>{

// const {message} = req.body

// let risk = 10
// let result = "Safe"

// if(message.includes("won") || message.includes("claim") || message.includes("₹")){
//     risk = 92
//     result = "Scam Detected"
// }

// res.json({
//     result,
//     risk_score:risk
// })

// })

// module.exports = router




// router.post("/check",(req,res)=>{

// const message = req.body.message.toLowerCase()

// let risk = 10
// let result = "Safe"

// if(
// message.includes("won") ||
// message.includes("claim") ||
// message.includes("click") ||
// message.includes("reward") ||
// message.includes("₹")
// ){
// risk = 92
// result = "⚠ Scam Detected"
// }

// res.json({
// result,
// risk_score:risk
// })

// })












// router.post("/check",(req,res)=>{

// const message = req.body.message.toLowerCase()

// let risk = 10
// let result = "Safe"

// const scamWords = ["won","reward","click","claim","prize","lottery","free","urgent","₹"]

// let score = 0

// scamWords.forEach(word=>{
// if(message.includes(word)){
// score += 10
// }
// })

// risk = score

// if(risk > 50){
// result = "⚠ Scam Detected"
// }

// res.json({
// result,
// risk_score:risk,
// ai_confidence: risk + "%"
// })

// const urlPattern = /(https?:\/\/[^\s]+)/g

// let phishing = false

// if(message.match(urlPattern)){
// phishing = true
// risk += 30
// }

// })









// import chatbot from "./chatbot.js"
// import express from "express"

// const router = express.Router()

// router.post("/check",(req,res)=>{

// const message = req.body.message.toLowerCase()

// let risk = 10
// let result = "Safe"

// const scamWords = [
// "won",
// "reward",
// "click",
// "claim",
// "prize",
// "lottery",
// "free",
// "urgent",
// "₹"
// ]

// let score = 0

// scamWords.forEach(word=>{
// if(message.includes(word)){
// score += 10
// }
// })

// risk = score


// // URL PHISHING DETECTION

// const urlPattern = /(https?:\/\/[^\s]+)/g

// let phishing = false

// if(message.match(urlPattern)){
// phishing = true
// risk += 30
// }


// // FINAL RESULT

// if(risk > 50){
// result = "⚠ Scam Detected"
// }


// // SEND RESPONSE

// res.json({
// result: result,
// risk_score: risk,
// ai_confidence: risk + "%",
// phishing_link: phishing
// })

// })
// app.use("/api", chatbot)
// module.exports = router















import express from "express"

const router = express.Router()

router.post("/check",(req,res)=>{

const message = req.body.message.toLowerCase()

let risk = 10
let result = "Safe"

const scamWords = [
"won",
"reward",
"click",
"claim",
"prize",
"lottery",
"free",
"urgent",
"₹"
]

let score = 0

scamWords.forEach(word=>{
if(message.includes(word)){
score += 10
}
})

risk = score


// URL PHISHING DETECTION

const urlPattern = /(https?:\/\/[^\s]+)/g

let phishing = false

if(message.match(urlPattern)){
phishing = true
risk += 30
}


// FINAL RESULT

if(risk > 50){
result = "⚠ Scam Detected"
}


// SEND RESPONSE

res.json({
result: result,
risk_score: risk,
ai_confidence: risk + "%",
phishing_link: phishing
})

})

export default router