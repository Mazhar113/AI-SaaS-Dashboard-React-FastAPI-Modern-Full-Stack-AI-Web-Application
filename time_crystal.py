import os
from dotenv import load_dotenv
import openai

# Load environment variables from .env
load_dotenv()

# Set OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY", "OPEN API KEY"
def embed_text(text: str):
    """
    Generate embedding vector for a given text.
    """
    response = openai.embeddings.create(
        model="text-embedding-3-small",  # Use a model you have access to
        input=text
    )
    return response.data[0].embedding

# Example usage
if __name__ == "__main__":
    vector = embed_text("test")
    print(f"Embedding length: {len(vector)}")
