from fastapi import APIRouter
import requests
from src.users.schemas import User
from src.config import PROJECT_ID, PRIVATE_KEY

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post("/login")
async def login(user: User):
    response = requests.get(
        "https://api.chatengine.io/users/me/",
        headers={
            "Project-ID": PROJECT_ID,
            "User-Name": user.username,
            "User-Secret": user.secret
        }
    )
    return response.json()


@router.post("/register")
async def register(user: User):
    response = requests.post(
        "https://api.chatengine.io/users/",
        data={
            "username": user.username,
            "secret": user.secret,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
        },
        headers={"Private-Key": PRIVATE_KEY}
    )
    return response.json()
