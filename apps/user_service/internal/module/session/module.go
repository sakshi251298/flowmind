package session

import (
	db "github.com/sakshi251298/core/internal/actor/db/sql"
	sessionQuerier "github.com/sakshi251298/core/internal/module/session/session-querier"
)

type sessionModule struct {
	service SessionService
}

func NewSessionModule(db db.DB) *sessionModule {
	querier := sessionQuerier.New(db.GetDB())
	repository := NewPostgresSessionRepository(querier)
	service := NewSessionService(repository)
	return &sessionModule{service: service}
}

func (m *sessionModule) GetService() SessionService {
	return m.service
}
