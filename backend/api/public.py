from fastapi import APIRouter
from ..rag_system.groq_client import groq_client
from ..rag_system.vectorestore import vectore_store

router = APIRouter(tags=["user routes"])    

@router.get("/igs/chat")
async def ask_question(request: str):
    """Main endpoint for questions"""
    relevant_docs = vectore_store.search(query=request)

    answer = groq_client.generate(question=request, documents=relevant_docs)

    return {
        "answer": answer,
        "retrieved_docs": relevant_docs
    }