import os
import chromadb

import uuid
from typing import Optional
from backend.config import settings
# from backend.rag_system.groq_client import groq_client
from .embedding import embedding_service

class VectorStore:
    def __init__(self): 
        os.makedirs(settings.CHROMA_PERSIST_DIR, exist_ok=True)
        
        self.client = chromadb.PersistentClient(
        path=settings.CHROMA_PERSIST_DIR  
        )

        self.collection = self.client.get_or_create_collection(
        name=settings.COLLECTION_NAME,
        metadata={"hnsw:space": "cosine"}  
        )

    def add_documents(
            self,
            chunks: list[str], 
            sources: list[str], 
            pages: Optional[list[int]] = None, 
            metadata: Optional[list[dict]] = None
    ) -> list[str]: 
        """Add document in bd"""

        if not chunks:
            return []
        
        ids = [str(uuid.uuid4()) for _ in chunks]

        metadatas = []
        for i , src in enumerate(sources): 
            meta = metadata[i] if metadata and i < len(metadata) else {}
            meta["source"] = src
            if pages and i < len(pages):
                meta["page"] = pages[i]
            metadatas.append(meta)

            embeddings = embedding_service.embed(chunks)

            self.collection.add(
                ids=ids, 
                embeddings=embeddings, 
                documents=chunks,
                metadatas=metadatas
            )

            return ids
        
    def search(
            self,
            query: str, 
            top_k: int = None,
            filter_dict: Optional[dict] = None
    ) -> list[dict]: 
        """Search relevant documents"""
        top_k = top_k or settings.TOP_K_RETRIEVE

        query_embedding = embedding_service.embed_query(query)
        if query_embedding is None: 
            return []
        
        results = self.collection.query(
            query_embeddings=[query_embedding], 
            n_results=top_k, 
            where=filter_dict,
            include=["documents", "metadatas", "distances"]
        )

        documents = []
        for i in range(len(results["documents"][0])): 
            distance = results["distances"][0][i]

            similarity = 1 - distance
            print(similarity)
            if similarity >= settings.MIN_SIMILARITY:
                documents.append({
                    "content": results["documents"][0][i], 
                    "source": results["metadatas"][0][i].get("source", "unknown"), 
                    "page": results["metadatas"][0][i].get("page"), 
                    "metadata": results["metadatas"][0][i], 
                    "similarity": round(similarity, 3)
                })

        documents.sort(key=lambda x: x["similarity"], reverse=True)
        return documents
    
    def delete_by_sorce(self, source: str) -> int:
        """Delete all chunks of one documents"""
        results = self.collection.get(where= {"source": source})
        if results["ids"]: 
            self.collection.delete(ids=results["ids"])
            return len(results["ids"])
        return 0
    
vectore_store = VectorStore()