package io.feedit.server.domain

import org.hibernate.annotations.CreationTimestamp
import java.sql.Timestamp
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
    @CreationTimestamp val timestamp: Timestamp? = null,
    @Id @GeneratedValue val feedbackId: Long? = null
)
