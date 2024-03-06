from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("api")
print(api_key)
app = FastAPI()

@app.get("/")
def read_root():
    return {"hello": "world"}

@app.get("/search/{ticker}")
def get_search(ticker: str):
    url = 'https://api.polygon.io/v1/open-close/' + ticker+ '/2023-01-09?adjusted=true&apiKey=' +  api_key
    print(url)
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return {"error": "Failed to fetch data"}