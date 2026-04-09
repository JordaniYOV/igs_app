from fastapi import FastAPI
from .api import public, admin

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI( 
    title="IGS", 
    description="helps young persons to understand insurance", 
    version="1.0.0"
)

app.include_router(public.router)
app.include_router(admin.router)

origins = [
    "http://localhost:3000",         
    "http://localhost:5173",           
    "http://127.0.0.1:5173",
    "https://your-frontend.vercel.app", # Production фронтенд
    "https://insurance-app.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
    expose_headers=["X-Custom-Header"],  #
    max_age=3600,                 
)