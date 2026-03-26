import express from "express"
import whois from "whois-json"

const router = express.Router()

router.post("/domain-info", async (req,res)=>{

try{

const { url } = req.body

const domain = new URL(url).hostname

const data = await whois(domain)

const creationDate = new Date(data.creationDate)

const today = new Date()

const ageYears = today.getFullYear() - creationDate.getFullYear()

res.json({
domain: domain,
age: ageYears,
creationDate: creationDate
})

}catch(error){

console.log(error)

res.status(500).json({error:"Domain lookup failed"})

}

})

export default router