package io.feedit.server.controller

import io.feedit.server.domain.System
import io.feedit.server.service.SystemService
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/system")
class SystemController(
    private val systemService: SystemService
) {
    @PostMapping("/registration")
    @ResponseStatus(HttpStatus.CREATED)
    fun registerSystem(@RequestBody system: System) {
        logger.info("Receive request to register system: ${system.systemName} (${system.custodianName})")
        systemService.registerSystem(system)
    }

    @PostMapping("/registration/bulk")
    fun registerMultipleSystems(@RequestBody systems: List<System>) {
        logger.info("Receive request to register multiple systems into Feedit")
        systemService.registerMultipleSystems(systems)
    }

    @GetMapping("/retrieve/all")
    fun retreiveAllRegisteredSystems(): MutableIterable<System> {
        logger.info("Querying all registered systems in Feedit")
        return systemService.retrieveAllSystems()
    }

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
