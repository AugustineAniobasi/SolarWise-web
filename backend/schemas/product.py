"""Schema definitions for product-related data."""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class ProductBase(BaseModel):
    """ Base schema for a product."""
    name: str
    description: Optional[str] = None
    price: float
    stock: Optional[int] = 0
    is_active: Optional[bool] = True
    category_id: int
    vendor_id: int

class ProductCreate(ProductBase):
    """ Schema for creating a product."""

class ProductUpdate(BaseModel):
    """Schema for updating a product."""
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    stock: Optional[int] = None

class ProductOut(ProductBase):
    """Schema for returning a product."""
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
