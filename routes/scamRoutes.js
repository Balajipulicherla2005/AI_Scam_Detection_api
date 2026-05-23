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