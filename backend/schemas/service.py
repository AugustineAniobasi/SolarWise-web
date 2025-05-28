"""Schema definitions for service-related data."""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class ServiceBase(BaseModel):
    """Base Schema for a service."""
    name: str
    description: Optional[str] = None
    price: float
    is_active: Optional[bool] = True
    category_id: int
    vendor_id: int

class ServiceCreate(ServiceBase):
    """Schema for creating a service."""

class ServiceUpdate(BaseModel):
    """Schema for updating a service."""
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None

class Service(ServiceBase):
    """Schema for returning a service."""
    id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        orm_mode = True
