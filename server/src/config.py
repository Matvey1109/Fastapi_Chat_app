import os
from dotenv import load_dotenv

load_dotenv()
PROJECT_ID = os.environ.get("PROJECT_ID")
PRIVATE_KEY = os.environ.get("PRIVATE_KEY")
