from fastapi import APIRouter
from ..rag_system.vectorestore import vectore_store

router = APIRouter(tags=["adminka"])

@router.post("/igs/admin/add")
async def add_docs(documents: list[str], sources: list[str], pages: list[int] = None): 
    """Add documents in vector store"""
    
    ids = vectore_store.add_documents(chunks=documents, sources=sources, pages=pages)
    return ids

