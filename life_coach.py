import os
from dotenv import load_dotenv
import openai

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY", "OPEN API KEY"
def simulate_decision(decision_prompt: str):
    """
    Simulate outcomes for a life decision using AI.
    """
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": decision_prompt}],
        temperature=0.7
    )
    return response.choices[0].message.content

# Example usage
if __name__ == "__main__":
    advice = simulate_decision("Should I move to Berlin for a tech job?")
    print(advice)
