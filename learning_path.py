import os
from dotenv import load_dotenv
import openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY", "Your API"
def generate_learning_path(user_profile: str):
    """
    Generate a personalized learning path based on user profile.
    """
    prompt = f"Create a step-by-step learning path for this user: {user_profile}"
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )
    return response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    print(generate_learning_path("I want to become a cybersecurity expert."))
