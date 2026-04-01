from groq import Groq
from backend.config import settings


class Generator:
    def __init__(self): 
        self.client = Groq(api_key=settings.GROQ_API_KEY)

    def prompt_builder(self, question: str, documents: list[dict]) -> str: 
        """Build prompt with context"""
        

    def generate(self, question: str, documents: list[dict]):
        """Answer generation using groq"""
        stream = self.client.chat.completions.create(
            messages=[
                {
                    "role": "system", 
                    "content": ""
                }, 
                {
                    "role": "user", 
                    "content": f"{question}",
                }
            ], 
            model="llama-3.3-70b-versatile", 

            temperature=0.5, 
            max_completion_tokens=1024, 
            top_p=1,
            stop=None, 
            stream=True,
        )

        for chunk in stream:
            print(chunk.choices[0].delta.content, end="")