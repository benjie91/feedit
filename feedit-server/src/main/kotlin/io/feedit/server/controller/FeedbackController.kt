package io.feedit.server.controller

import io.feedit.server.domain.Feedback
import io.feedit.server.repository.FeedbackRepository
import io.feedit.server.service.FeedbackService
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/feedback")
class FeedbackController(
    private val feedbackService: FeedbackService
) {

    @PostMapping("/ingest")
    fun ingestFeedback(@RequestBody feedback: Feedback) {
        logger.info(feedback.feedback)
        logger.info(feedback.timestamp.toString())
        feedbackService.ingestFeedback(feedback)
    }

//    @GetMapping("/retrieve/{systemName}")
//    fun retrieveSystemFeedback(@PathVariable systemName: String): String {
//        return "Test MOCK api call"
//    }
//
//    @GetMapping("/retrieve/all")
//    fun retrieveAllFeedback(): MutableIterable<Feedback> = feedbackRepository.findAll()

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
