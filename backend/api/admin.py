from fastapi import APIRouter

router = APIRouter(tags="adminka")

@router.post("/igs/admin/add")
async def add_documents(): 
    return 1