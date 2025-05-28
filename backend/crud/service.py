from sqlalchemy.orm import Session
from models.service import Service
from schemas.service import ServiceBase
from typing import List, Optional

def create_service(db: Session, service: ServiceBase) -> Service:
    db_service = Service(**service.modeldump())
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service

def get_service(db: Session, service_id: int) -> Optional[Service]:
    return db.query(Service).filter(Service.id == service_id).first()

def get_all_services(db: Session) -> List[Service]:
    return db.query(Service).all()

def update_service(db: Session, service_id: int, service_update: ServiceBase) -> Optional[Service]:
    db_service = db.query(Service).filter(Service.id == service_id).first()
    if not db_service:
        return None
    for field, value in service_update.dict(exclude_unset=True).items():
        setattr(db_service, field, value)
    db.commit()
    db.refresh(db_service)
    return db_service

def delete_service(db: Session, service_id: int) -> bool:
    db_service = db.query(Service).filter(Service.id == service_id).first()
    if not db_service:
        return False
    db.delete(db_service)
    db.commit()
    return True