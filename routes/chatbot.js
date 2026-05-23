import express from "express"

const router = express.Router()

router.post("/chat",(req,res)=>{

const { message } = req.body

res.json({
reply: "This message looks safe."
})

})

export default router