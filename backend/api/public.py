from fastapi import APIRouter

router = APIRouter(tags="user's routes")

@router.get("/igs/chat")
async def ask_question(request: str):
    return request




