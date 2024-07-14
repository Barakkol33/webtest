import uvicorn
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi_login import LoginManager
from starlette.middleware.sessions import SessionMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse

from logic import get_job, get_job_file_content

SECRET = "your-secret-key"
app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key=SECRET)

# Configure CORS
origins = [
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

manager = LoginManager(SECRET, token_url="/auth/login", use_cookie=True, cookie_name="access_token")

users_db = {"testuser": {"username": "testuser", "password": "testpassword"}}

app.mount("/static", StaticFiles(directory="../build/static"))

templates = Jinja2Templates(directory="../build")


@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@manager.user_loader()
def load_user(username: str):
    user = users_db.get(username)
    return user


@app.post("/auth/login")
def login(data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password
    user = load_user(username)
    if not user or user['password'] != password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = manager.create_access_token(data={"sub": username})
    response = JSONResponse({"msg": "Login successful"})
    response.set_cookie(key="access_token", value=access_token, secure=True, samesite='none')
    return response


@app.get("/execution/{execution_id}/{job_id}")
def api_get_job(execution_id: str, job_id: str):
    return get_job(execution_id=execution_id, job_id=job_id)


@app.get("/execution/{execution_id}/{job_id}/{file_id}")
def api_get_job_file_content(execution_id: str, job_id: str, file_id: str):
    return get_job_file_content(execution_id=execution_id, job_id=job_id, file_name=file_id)


@app.get("/executions")
def get_executions(user=Depends(manager)):
    return {"msg": f"Hello {user['username']}"}


def main():
    uvicorn.run(app, port=8000)


if __name__ == "__main__":
    main()
