# My Dashboard
All-in-one personal command center to maximize productivity.
```bash
git clone git@github.com:JManion32/my-dash.git
```

## Backend
Built with Python and FastAPI
### Setup
After cloning, run:
```bash
pip install -r requirements.txt
```
To activate the virtual environment, run:
```bash
python3 -m venv venv
source venv/bin/activate
```
### Running the server
```bash
uvicorn app.main:app --reload
```
Once running, check here:
```
http://127.0.0.1:8000
http://127.0.0.1:8000/docs
```
### Docker
```bash
docker build -t my-dash-server .
docker run -p 8000:8000 my-dash-server
```

## Front-end
Built with Vue, TypeScript, and Vite