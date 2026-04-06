from fastapi import FastAPI
from .api import public, admin


app = FastAPI( 
    title="IGS", 
    description="helps young persons to understand insurance", 
    version="1.0.0"
)

app.include_router(public.router)
app.include_router(admin.router)