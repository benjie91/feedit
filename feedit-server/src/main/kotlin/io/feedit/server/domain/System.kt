package io.feedit.server.domain

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class System(
    @Id @GeneratedValue val systemId: Long? = null,
    @Column(unique = true) val systemName: String,
    val custodianName: String
)
