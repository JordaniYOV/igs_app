from fastapi import APIRouter
from ..rag_system.groq_client import groq_client
from ..rag_system.vectorestore import vectore_store

router = APIRouter(tags=["user routes"])    

@router.post("/igs/chat")
async def question(question: str):
    """Main endpoint for questions"""
    relevant_docs = vectore_store.search(query=question)

    answer = groq_client.generate(question=question, documents=relevant_docs)

    if answer:
        return {
            "answer": answer,
            "sources": relevant_docs
        }
    return {
            "answer": "not working hehe!!",
            "sources": relevant_docs
    }