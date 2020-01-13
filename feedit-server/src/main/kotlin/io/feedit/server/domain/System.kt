package io.feedit.server.domain

import org.hibernate.annotations.CreationTimestamp
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class System(
    @Id @GeneratedValue val systemId: Long? = null,
    @Column(unique = true) val systemName: String,
    val custodianName: String,
    @CreationTimestamp val registeredDateTime: LocalDateTime? = null
)
