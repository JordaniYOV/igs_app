from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    GROQ_API_KEY: str =  "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"
    GROQ_GENERATION_MODEL: str = "llama-3.3-70b-versatile"
    EMBEDDING_MODEL: str = 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2'

    CHROMA_PERSIST_DIR: str = "./chroma_db"
    COLLECTION_NAME: str = "insurance_docs"
    TOP_K_RETRIEVE: int = 5
    MIN_SIMILARITY: float = 0.75



settings = Settings()