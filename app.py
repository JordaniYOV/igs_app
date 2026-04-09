import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from backend import main

app = FastAPI( 
    title="IGS", 
    description="helps young persons to understand insurance", 
    version="1.0.0"
)

app.include_router(main.main_router)


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

static_path = os.path.join(os.path.dirname(__file__), "static")

if os.path.exists(static_path):
    app.mount("/", StaticFiles(directory=static_path, html=True), name="static")
else:
    @app.get("/")
    async def no_static():
        return {"error": "Frontend not built. Run: cd frontend-src && npm run build"}

@app.get("/{full_path:path}")
async def catch_all(full_path: str):
    if full_path.startswith("api/"):
        from fastapi import HTTPException
        raise HTTPException(404)
    
    index = os.path.join(static_path, "index.html")
    if os.path.exists(index):
        return FileResponse(index)
    return {"error": "Not found"}