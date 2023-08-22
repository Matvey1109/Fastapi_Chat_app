from pydantic import BaseModel


class User(BaseModel):
    username: str
    secret: str
    email: str | None = None
    first_name: str | None = None
    last_name: str | None = None
