from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    GROQ_API_KEY: str =  "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"



settings = Settings()