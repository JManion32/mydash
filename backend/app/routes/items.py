from fastapi import APIRouter

router = APIRouter(prefix="/items", tags=["items"])

@router.get("/")
def get_items():
    return {"items": ["item1", "item2"]}

@router.post("/")
def create_item(item: dict):
    return {"created": item}