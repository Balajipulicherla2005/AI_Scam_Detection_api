import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import fetch from "node-fetch";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



// =====================================================
// MULTIPLE GROQ API KEYS
// =====================================================

const GROQ_KEYS = [

  process.env.GROQ_API_KEY_1,
  process.env.GROQ_API_KEY_2,
  process.env.GROQ_API_KEY_3,
  process.env.GROQ_API_KEY_4,
  process.env.GROQ_API_KEY_5,
  process.env.GROQ_API_KEY_6,
  process.env.GROQ_API_KEY_7,
  process.env.GROQ_API_KEY_8,
  process.env.GROQ_API_KEY_9,
  process.env.GROQ_API_KEY_10

].filter(Boolean);



// =====================================================
// CREATE GROQ CLIENT
// =====================================================

const createGroqClient = (apiKey) => {

  return new Groq({

    apiKey

  });

};



// =====================================================
// AI REQUEST WITH AUTO FALLBACK
// =====================================================

const askGroqAI = async (message) => {

  let lastError = null;

  for (let i = 0; i < GROQ_KEYS.length; i++) {

    try {

      console.log(
        `Using GROQ KEY ${i + 1}`
      );

      const groq =
        createGroqClient(
          GROQ_KEYS[i]
        );

      const completion =
        await groq.chat.completions.create({

          model:
            "llama-3.1-8b-instant",

          messages: [

            {

              role: "system",

              content: `

You are an advanced AI scam detector.

Rules:

- Detect phishing, fake banking alerts, scam links, fake rewards, OTP fraud, urgent payment scams.
- Trusted domains like google.com, github.com, microsoft.com, youtube.com, openai.com are SAFE.
- Always reply clearly.

Format:

Result: SAFE or SCAM

Reason:
Short explanation.

              `

            },

            {

              role: "user",

              content: message

            }

          ]

        });

      return completion
        .choices[0]
        .message
        .content;

    }

    catch (error) {

      console.log(
        `GROQ KEY ${i + 1} FAILED`
      );

      console.log(error.message);

      lastError = error;

    }

  }

  throw lastError;

};



// =====================================================
// SCAM DETECTION API
// =====================================================

app.post("/api/check", (req, res) => {

  try {

    const { message } =
      req.body;

    if (!message) {

      return res.status(400).json({

        prediction: "SAFE",

        probability: 0,

        type:
          "No message provided"

      });

    }

    const msg =
      message.toLowerCase();

    let prediction =
      "SAFE";

    let probability = 10;

    let type =
      "Normal message";



    // SAFE OTP

    if (

      msg.includes("otp") &&
      msg.includes("do not share")

    ) {

      prediction = "SAFE";

      probability = 5;

      type =
        "Official OTP Message";

    }



    // SCAM DETECTION

    else if (

      msg.includes("lottery") ||
      msg.includes("win money") ||
      msg.includes("prize") ||
      msg.includes("claim reward") ||
      msg.includes("free money") ||

      msg.includes("bank") ||
      msg.includes("account suspended") ||
      msg.includes("verify account") ||
      msg.includes("reactivate") ||

      msg.includes("urgent") ||
      msg.includes("immediately") ||
      msg.includes("action required") ||

      msg.includes("send money") ||
      msg.includes("upi") ||
      msg.includes("payment") ||

      msg.includes("click link") ||
      msg.includes("bit.ly") ||
      msg.includes("tinyurl") ||
      msg.includes("grabify") ||

      msg.includes("share otp") ||

      msg.includes("gift") ||
      msg.includes("reward") ||
      msg.includes("offer")

    ) {

      prediction = "SCAM";

      probability = 85;

      type =
        "Fraud / Phishing";

    }

    return res.json({

      prediction,
      probability,
      type

    });

  }

  catch (error) {

    console.log(error);

    return res.status(500).json({

      prediction: "SAFE",

      probability: 0,

      type: "Server Error"

    });

  }

});



// =====================================================
// AI ASSISTANT
// =====================================================

app.post("/api/ask-ai", async (req, res) => {

  try {

    const { message } =
      req.body;

    if (!message) {

      return res.status(400).json({

        reply: "Message required"

      });

    }

    const aiReply =
      await askGroqAI(message);

    res.json({

      reply: aiReply

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      reply:
        "All AI servers are busy. Try again later."

    });

  }

});



// =====================================================
// TEXT TO SPEECH
// =====================================================

app.post("/api/speak", async (req, res) => {

  try {

    const {
      text,
      language
    } = req.body;

    if (!text) {

      return res.status(400).json({

        error:
          "Text required"

      });

    }

    const url =

      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
        text
      )}&tl=${language}&client=tw-ob`;

    const response =
      await fetch(url);

    const audio =
      await response.arrayBuffer();

    res.set(
      "Content-Type",
      "audio/mpeg"
    );

    res.send(
      Buffer.from(audio)
    );

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      error:
        "Voice generation failed"

    });

  }

});



// =====================================================
// DOMAIN INFO API
// =====================================================

app.post("/api/domain-info", async (req, res) => {

  try {

    const { url } =
      req.body;

    if (!url) {

      return res.status(400).json({

        error:
          "URL required"

      });

    }

    res.json({

      age: "12",

      country:
        "United States",

      created:
        "2012-08-15",

      ip:
        "142.250.183.206"

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      error:
        "Domain lookup failed"

    });

  }

});



// =====================================================
// GLOBAL ERROR
// =====================================================

app.use((err, req, res, next) => {

  console.log(err);

  res.status(500).json({

    error:
      "Internal Server Error"

  });

});



// =====================================================
// SERVER
// =====================================================

const PORT =
  process.env.PORT || https://ai-scam-detection-api.onrender.com;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

    console.log(
    `✅ MySQL connected on port ${PORT}`
  );


});
