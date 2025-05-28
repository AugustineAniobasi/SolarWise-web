"""Schema definiton for cart-related data"""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class CartBase(BaseModel):
    """ Base schema for a cart. """
    user_id: int
    product_id: Optional[int] = None
    service_id: Optional[int] = None
    quantity: int

class CartCreate(CartBase):
    """ Schema for creating a cart. """

class CartUpdate(BaseModel):
    """ Schema for updating a cart. """
    product_id: Optional[int] = None
    service_id: Optional[int] = None
    quantity: Optional[int] = None

class CartOut(CartBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
