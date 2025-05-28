"""Schema definitions for category data."""
from typing import Optional
from pydantic import BaseModel

class CategoryBase(BaseModel):
    """Base schema for a category"""
    name: str
    description: Optional[str] = None

class CategoryCreate(CategoryBase):
    """Schema for creating a category."""

class CategoryUpdate(BaseModel):
    """Schema for updating a category."""
    name: Optional[str] = None
    description: Optional[str] = None

class CategoryOut(CategoryBase):
    """Schema for returning a category."""
    id: int

    class Config:
        orm_mode = True
