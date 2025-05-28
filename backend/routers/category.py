from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from crud import category as category_crud
from schemas.category import CategoryCreate, CategoryUpdate, CategoryOut
from typing import List
from app.db.session import get_db

router = APIRouter(prefix="/admin/categories", tags=["Admin - Categories"])


@router.post("/", response_model=CategoryOut)
def create_category(category: CategoryCreate, db: Session = Depends(get_db)):
    return category_crud.create_category(db, category)


@router.get("/", response_model=List[CategoryOut])
def read_categories(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return category_crud.get_categories(db, skip=skip, limit=limit)


@router.get("/{category_id}", response_model=CategoryOut)
def read_category(category_id: int, db: Session = Depends(get_db)):
    db_category = category_crud.get_category(db, category_id)
    if not db_category:
        raise HTTPException(status_code=404, detail="Category not found")
    return db_category


@router.put("/{category_id}", response_model=CategoryOut)
def update_category(category_id: int, category: CategoryUpdate, db: Session = Depends(get_db)):
    updated = category_crud.update_category(db, category_id, category)
    if not updated:
        raise HTTPException(status_code=404, detail="Category not found")
    return updated


@router.delete("/{category_id}")
def delete_category(category_id: int, db: Session = Depends(get_db)):
    deleted = category_crud.delete_category(db, category_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Category not found")
    return {"message": "Category deleted successfully"}
