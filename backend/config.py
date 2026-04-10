from pydantic_settings import BaseSettings
import os

class Settings(BaseSettings):
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    GROQ_GENERATION_MODEL: str = "llama-3.3-70b-versatile"
    EMBEDDING_MODEL: str = 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2'

    CHROMA_PERSIST_DIR: str = ".backend/chroma_db"
    COLLECTION_NAME: str = "insurance_docs"
    TOP_K_RETRIEVE: int = 5
    MIN_SIMILARITY: float = 0.5



settings = Settings()