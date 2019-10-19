package io.feedit.server.service

import io.feedit.server.domain.System
import io.feedit.server.repository.SystemRepository
import org.springframework.stereotype.Service

@Service
class SystemService(
    val systemRepository: SystemRepository
) {
    fun registerSystem(system: System) {
        systemRepository.save(system)
    }
}
