from fastapi import APIRouter
from .api import public, admin


main_router = APIRouter()

main_router.include_router(public.router)
main_router.include_router(admin.router)
