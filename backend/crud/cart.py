from sqlalchemy.orm import Session
from models.cart import Cart
from schemas.cart import CartBase
from typing import Optional

def create_cart(db: Session, cart: CartBase) -> Cart:
    db_cart = Cart(**cart.modeldump())
    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)
    return db_cart

def get_cart_by_user(db: Session, user_id: int) -> Optional[Cart]:
    return db.query(Cart).filter(Cart.user_id == user_id).first()

def update_cart(db: Session, cart_id: int, cart_update: CartBase) -> Optional[Cart]:
    db_cart = db.query(Cart).filter(Cart.id == cart_id).first()
    if not db_cart:
        return None
    for field, value in cart_update.dict(exclude_unset=True).items():
        setattr(db_cart, field, value)
    db.commit()
    db.refresh(db_cart)
    return db_cart

def delete_cart(db: Session, cart_id: int) -> bool:
    db_cart = db.query(Cart).filter(Cart.id == cart_id).first()
    if not db_cart:
        return False
    db.delete(db_cart)
    db.commit()
    return True