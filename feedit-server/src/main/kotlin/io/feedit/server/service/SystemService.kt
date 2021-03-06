package io.feedit.server.service

import io.feedit.server.domain.Feedback
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

    fun registerMultipleSystems(systems: List<System>) {
        systems.forEach {
            systemRepository.save(it)
        }
    }

    fun retrieveSystemDetail(systemId: Long): System? {
        return systemRepository.findBySystemId(systemId)
    }

    fun retrieveAllSystems(): MutableIterable<System> {
        return systemRepository.findAll()
    }
}
