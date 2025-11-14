import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# D-ID API key
DID_API_KEY = os.getenv("DID_API_KEY", "DID API KEY")
DID_API_URL = "https://api.d-id.com/talks"

def generate_video(script_text: str, language="en-US", voice="alloy"):
    """
    Generate a video from text using D-ID API.
    Returns video URL or error message.
    """
    headers = {
        "Authorization": f"Bearer {DID_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "script": {"type": "text", "input": script_text},
        "config": {"voice": voice, "language": language, "output_format": "mp4"}
    }

    response = requests.post(DID_API_URL, json=payload, headers=headers)

    if response.status_code == 201:
        return response.json().get("video_url")
    else:
        return f"Error: {response.text}"

# Example usage
if __name__ == "__main__":
    video_url = generate_video("Hello world!")
    print(video_url)
