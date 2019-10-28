package io.feedit.server.service

import io.feedit.server.domain.Feedback
import io.feedit.server.domain.System
import io.feedit.server.repository.FeedbackRepository
import io.feedit.server.repository.SystemRepository
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

@Service
class FeedbackService(
    val feedbackRepository: FeedbackRepository,
    val systemRepository: SystemRepository
) {
    fun ingestFeedback(feedback: Feedback) {
        val system = systemRepository.findBySystemId(feedback.systemId)
        if (system !== null)
            feedbackRepository.save(feedback)
        else {
            throw IllegalArgumentException("System is not registered and thus cannot accept the feedback request")
        }
    }

    fun ingestBulkFeedback(feedback: List<Feedback>) {
        feedback.forEach {
            val system = systemRepository.findBySystemId(it.systemId)
            if (system !== null)
                feedbackRepository.save(it)
            else {
                throw IllegalArgumentException("System is not registered and thus cannot accept the feedback request")
            }
        }
    }

    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        private val logger = LoggerFactory.getLogger(javaClass.enclosingClass)
    }
}
