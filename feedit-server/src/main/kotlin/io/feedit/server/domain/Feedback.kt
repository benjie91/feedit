package io.feedit.server.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class Feedback(
    val userId: Long,
    val userGroup: String,
    val systemId: Long,
    val feedback: String,
    @Id @GeneratedValue val feedbackId: Long? = null
)
