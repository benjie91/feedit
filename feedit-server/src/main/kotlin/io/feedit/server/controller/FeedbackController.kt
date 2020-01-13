package io.feedit.server.controller

import io.feedit.server.domain.Feedback
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
        logger.info("Receive Request to ingest feedback into Feedit")
        feedbackService.ingestFeedback(feedback)
    }

    @PostMapping("/ingest/bulk")
    fun ingestBulkFeedback(@RequestBody feedback: List<Feedback>) {
        logger.info("Receive Request to ingest bulk feedback into Feedit")
        feedbackService.ingestBulkFeedback(feedback)
    }

    @DeleteMapping("/delete/all")
    fun deleteAllFeedback() {
        logger.info("Receive Request to delete all feedback from Feedit")
        feedbackService.deleteAllFeedback()
    }

//    @GetMapping("/retrieve/{systemName}")
//    fun retrieveSystemFeedback(@PathVariable systemName: String): String {
//        return "Test MOCK api call"
//    }

    @GetMapping("/retrieve/all")
    fun retrieveAllFeedback(): MutableIterable<Feedback> = feedbackService.retrieveAllFeedback()

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
