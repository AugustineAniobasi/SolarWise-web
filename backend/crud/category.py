from sqlalchemy.orm import Session
from models.category import Category
from schemas.category import CategoryBase
from typing import List, Optional

def create_category(db: Session, category: CategoryBase) -> Category:
    db_category = Category(**category.modeldump())
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

def get_category(db: Session, category_id: int) -> Optional[Category]:
    return db.query(Category).filter(Category.id == category_id).first()

def get_all_categories(db: Session) -> List[Category]:
    return db.query(Category).all()

def update_category(db: Session, category_id: int, category_update: CategoryBase) -> Optional[Category]:
    db_category = db.query(Category).filter(Category.id == category_id).first()
    if not db_category:
        return None
    for field, value in category_update.dict(exclude_unset=True).items():
        setattr(db_category, field, value)
    db.commit()
    db.refresh(db_category)
    return db_category

def delete_category(db: Session, category_id: int) -> bool:
    db_category = db.query(Category).filter(Category.id == category_id).first()
    if not db_category:
        return False
    db.delete(db_category)
    db.commit()
    return True