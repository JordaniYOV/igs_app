import os

from sentence_transformers import SentenceTransformer
from ..config import settings

from huggingface_hub import login

hf_token = os.getenv('hf_token', '')
if hf_token:
    login(token=hf_token)
    print("✅ Авторизован на HF Hub")

# Затем загрузка модели
from sentence_transformers import SentenceTransformer

class EmbeddingService:
    model = None
    def __init__(self):
        if self.model is None:
            self.model = SentenceTransformer(settings.EMBEDDING_MODEL)
    
    def embed(self, texts: list[str]) -> list[list[float]]:
        """Векторизация текстов"""
        embeddings = self.model.encode(
            texts,
            normalize_embeddings=True,
            show_progress_bar=False
        )
        return embeddings.tolist()
    
    def embed_query(self, text: str) -> list[float]:
        """Векторизация одного запроса"""
        return self.embed([text])[0]


embedding_service = EmbeddingService()

