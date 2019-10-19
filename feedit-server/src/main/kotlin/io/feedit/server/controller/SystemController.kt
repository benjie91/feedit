package io.feedit.server.controller

import io.feedit.server.domain.System
import io.feedit.server.service.SystemService
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/system")
class SystemController(
    private val systemService: SystemService
) {
    @PostMapping("/registration")
    fun registerSystem(@RequestBody system: System) {

        logger.info("Receive Request to register system: ${system.systemName} (${system.custodianName}) [${system.systemId}]")

        systemService.registerSystem(system)
    }

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
