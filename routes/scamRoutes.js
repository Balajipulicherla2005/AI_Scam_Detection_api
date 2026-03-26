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

// export default router









// import express from "express"

// const router = express.Router()

// router.post("/check", async (req,res)=>{

// const {message} = req.body

// let prediction = "SAFE"
// let probability = 10
// let type = "No threat detected"

// const lower = message.toLowerCase()

// if(
// lower.includes("win") ||
// lower.includes("prize") ||
// lower.includes("lottery") ||
// lower.includes("click here") ||
// lower.includes("verify") ||
// lower.includes("urgent") ||
// lower.includes("suspended") ||
// lower.includes("account") ||
// lower.includes("bit.ly") ||
// lower.includes("http://")
// ){

// prediction = "SCAM"
// probability = 70
// type = "Phishing Link Detected"

// }

// res.json({
// prediction,
// probability,
// type
// })

// })

// export default router











// import express from "express"

// const router = express.Router()

// router.post("/check", async (req,res)=>{

// const { message } = req.body

// const lower = message.toLowerCase()

// let prediction = "SAFE"
// let probability = 10
// let type = "No threat detected"

// // Strong scam keyword detection
// const scamKeywords = [
// "otp",
// "verify your account",
// "urgent",
// "bank account blocked",
// "reactivate account",
// "confirm your details",
// "send money",
// "payment request",
// "lottery",
// "claim prize",
// "win money",
// "click this link",
// "click here",
// "suspended account",
// "security verification",
// "bit.ly",
// "http://",
// "https://"
// ]

// let scamDetected = false

// for (let word of scamKeywords){
// if(lower.includes(word)){
// scamDetected = true
// break
// }
// }

// // If scam keywords detected
// if(scamDetected){
// prediction = "SCAM"
// probability = 85
// type = "Phishing / Social Engineering Scam"
// }

// res.json({
// prediction,
// probability,
// type,
// scam: scamDetected
// })

// })

// export default router

















import express from "express"

const router = express.Router()

router.post("/check", async (req,res)=>{

const { message } = req.body

if(!message){
return res.json({
prediction:"SAFE",
probability:0,
type:"No message provided",
scam:false
})
}

const lower = message.toLowerCase()

let prediction = "SAFE"
let probability = 10
let type = "No threat detected"


// Scam keyword detection list
const scamKeywords = [

/* Common phishing scams */

"otp",
"verify your account",
"urgent",
"bank account blocked",
"reactivate account",
"confirm your details",
"send money",
"payment request",
"lottery",
"claim prize",
"win money",
"click this link",
"click here",
"suspended account",
"security verification",

/* Suspicious links */

"bit.ly",
"http://",
"https://",

/* Indian financial scam patterns */

"kyc update",
"kyc verification",
"aadhaar verification",
"aadhaar update",
"pan verification",
"pan update",
"upi request",
"upi payment",
"paytm payment",
"paytm link",
"google pay",
"gpay request",
"phonepe payment",
"wallet update"

]

let scamDetected = false

for(const word of scamKeywords){

if(lower.includes(word)){
scamDetected = true
break
}

}


// If scam detected

if(scamDetected){

prediction = "SCAM"
probability = 85
type = "Phishing / Financial Scam"

}


// API response

res.json({
prediction,
probability,
type,
scam: scamDetected
})

})

export default router