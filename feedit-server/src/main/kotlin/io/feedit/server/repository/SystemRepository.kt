package io.feedit.server.repository

import io.feedit.server.domain.System
import org.springframework.data.repository.CrudRepository

interface SystemRepository : CrudRepository<System, Long>
