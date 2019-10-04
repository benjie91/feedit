package io.feedit.server.repository

import io.feedit.server.domain.Feedback
import org.springframework.data.repository.CrudRepository

interface FeedbackRepository : CrudRepository<Feedback, Long> {
    fun findByUserPerson(userPerson: String): Feedback?
}
