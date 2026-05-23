# 🛡️ AI Scam Detection API

Backend API server powering the AI Scam Detection Platform.

Provides secure AI processing, chatbot intelligence, URL analysis, voice generation, and multi-key AI fallback handling.



# 🚀 Backend Features

✅ AI Scam Detection API  
✅ AI Cybersecurity Assistant  
✅ Text-to-Speech Voice API  
✅ URL Safety Scanner  
✅ Multi API Key Rotation System  
✅ Secure Express Server  
✅ CORS Enabled  
✅ Environment Variable Protection  


# 🧠 API Modules

| API | Description |
|---|---|
| /api/chat | AI chatbot responses |
| /api/speak | Generate AI voice response |
| /api/url-scan | Analyze suspicious URLs |


# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js
- Groq API
- dotenv
- axios
- cors



# 📂 Project Structure

txt
server/
 ├── server.js
 ├── package.json
 ├── .env
 └── node_modules/


# ⚙️ Installation

## Install Dependencies

bash
npm install


# 🔐 Environment Variables

Create `.env`

env
GROQ_API_KEY_1=your_api_key

GROQ_API_KEY_2=your_api_key

GROQ_API_KEY_3=your_api_key

PORT=5000

# ▶️ Start Backend

bash
npm start


Runs on:

txt
http://localhost:5000




# 📡 API Endpoints

## AI Assistant

txt
POST /api/chat

## Voice Response

txt
POST /api/speak

## URL Analysis

txt
POST /api/url-scan

# 🔒 Security Features

- API key protection using `.env`
- Multi-key AI fallback
- Secure backend architecture
- CORS protection
- Environment variable isolation



