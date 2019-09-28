package io.feedit.server.controller

import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/feedback")
class FeedbackController {

    @PostMapping("/ingest")
    fun ingestFeedback() {
    }

    @GetMapping("/retrieve/{systemName}")
    fun retrieveSystemFeedback(@PathVariable systemName: String): String {

        return "Test MOCK api call"
    }

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
