from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.users.router import router as router_users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_users)
