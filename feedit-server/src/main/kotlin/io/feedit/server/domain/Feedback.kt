package io.feedit.server.domain

import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Feedback(
    val systemId: Long,
    val feedbackType: String,
    val feedbackQuestion: String,
    val feedbackAnswer: String,
    val userId: String,
    val userGroup: String,
    val timestamp: LocalDateTime = LocalDateTime.now(),
    @Id @GeneratedValue val feedbackId: Long? = null
)
