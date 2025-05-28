from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from schemas.service import ServiceCreate, Service, ServiceUpdate
from crud import service as service_crud
from app.db.session import get_db

router = APIRouter(prefix="/admin/services", tags=["Admin - Services"])


@router.post("/", response_model=Service)
def create_service(service: ServiceCreate, db: Session = Depends(get_db)):
    return service_crud.create_service(db, service)


@router.get("/", response_model=List[Service])
def read_services(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return service_crud.get_service(db, skip=skip, limit=limit)


@router.get("/{service_id}", response_model=Service)
def read_service(service_id: int, db: Session = Depends(get_db)):
    db_service = service_crud.get_service(db, service_id)
    if not db_service:
        raise HTTPException(status_code=404, detail="Service not found")
    return db_service


@router.put("/{service_id}", response_model=Service)
def update_service(service_id: int, service: ServiceUpdate, db: Session = Depends(get_db)):
    updated_service = service_crud.update_service(db, service_id, service)
    if not updated_service:
        raise HTTPException(status_code=404, detail="Service not found")
    return updated_service


@router.delete("/{service_id}")
def delete_service(service_id: int, db: Session = Depends(get_db)):
    deleted = service_crud.delete_service(db, service_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Service not found")
    return {"message": "Service deleted successfully"}
