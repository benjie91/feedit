package io.feedit.server.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Feedback(
    @Id @GeneratedValue val id: Long? = null,
    val userPerson: String,
    val userGroup: String,
    val systemId: Long,
    val feedback: String
)

