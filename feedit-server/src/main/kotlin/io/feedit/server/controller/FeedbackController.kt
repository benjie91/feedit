package io.feedit.server.controller

import io.feedit.server.domain.Feedback
import io.feedit.server.repository.FeedbackRepository
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/feedback")
class FeedbackController(
    private val feedbackRepository: FeedbackRepository
) {

    @PostMapping("/ingest")
    fun ingestFeedback() {
        feedbackRepository.save(Feedback(12069, "Department A", 12345, "This is good"))
        feedbackRepository.save(Feedback(12069, "Department A", 12345, "This is bad"))
        feedbackRepository.save(Feedback(12069, "Department A", 12345, "This is pretty good"))
        feedbackRepository.save(Feedback(12069, "Department A", 12345, "This is pretty bad"))
    }

    @GetMapping("/retrieve/{systemName}")
    fun retrieveSystemFeedback(@PathVariable systemName: String): String {
        return "Test MOCK api call"
    }

    @GetMapping("/retrieve/all")
    fun retrieveAllFeedback(): MutableIterable<Feedback> = feedbackRepository.findAll()

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
