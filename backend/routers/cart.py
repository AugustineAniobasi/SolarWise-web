from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from schemas.cart import CartCreate, CartUpdate, CartOut
from crud import cart as crud_cart
from dependencies import get_db
from typing import List

router = APIRouter(prefix="/admin/cart", tags=["Admin - Cart"])

@router.post("/", response_model=CartOut)
def add_to_cart(cart_data: CartCreate, db: Session = Depends(get_db)):
    return crud_cart.create_cart(db=db, cart_data=cart_data)

@router.get("/{user_id}", response_model=List[CartOut])
def get_user_cart(user_id: int, db: Session = Depends(get_db)):
    return crud_cart.get_cart(db=db, user_id=user_id)

@router.put("/{cart_id}", response_model=CartOut)
def update_cart_item(cart_id: int, updates: CartUpdate, db: Session = Depends(get_db)):
    return crud_cart.update_cart(db=db, cart_id=cart_id, updates=updates)

@router.delete("/{cart_id}")
def remove_cart_item(cart_id: int, db: Session = Depends(get_db)):
    return crud_cart.delete_cart_item(db=db, cart_id=cart_id)
