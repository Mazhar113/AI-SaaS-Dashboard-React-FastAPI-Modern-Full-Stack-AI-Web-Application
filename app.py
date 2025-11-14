from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import backend AI utilities
from ai_utils import learning_path, life_coach, synthetic_media, time_crystal

# Initialize FastAPI app
app = FastAPI(title="AI SaaS Dashboard")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# Routes
# -------------------------------

@app.get("/")
def root():
    return {"message": "AI SaaS Dashboard Backend is running!"}

# Learning Path Endpoint
@app.post("/learning-path/")
def get_learning_path(profile: str):
    try:
        result = learning_path.generate_learning_path(profile)
        return {"learning_path": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Life Coach Endpoint
@app.post("/life-coach/")
def get_life_advice(prompt: str):
    try:
        advice = life_coach.simulate_decision(prompt)
        return {"advice": advice}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Synthetic Media (Video) Endpoint
@app.post("/synthetic-media/")
def create_video(script: str):
    try:
        video_url = synthetic_media.generate_video(script)
        if "Error" in video_url:
            raise HTTPException(status_code=400, detail=video_url)
        return {"video_url": video_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Text Embedding Endpoint
@app.post("/embed-text/")
def get_text_embedding(text: str):
    try:
        vector = time_crystal.embed_text(text)
        return {"embedding_length": len(vector), "embedding": vector}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
