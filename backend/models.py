from pydantic import BaseModel, Field
from typing import List, Optional, Literal


class SourceCitation(BaseModel): 
    document: str
    page: Optional[int] = None

class QueryRequest(BaseModel): 
    question: str = Field(..., min_length=3, max_length=1000)
    policy_type: str = "all"

class QueryResponse(BaseModel): 
    answer: str
    confidence: Literal["high", "medium", "low", "unknown"]
    sources: list[SourceCitation]

class DocumentUpload(BaseModel): 
    filename: str
    status: str
    chunks_added: int
