package com.servy.user.domain

import jakarta.persistence.*

@Entity
@Table(name = "tb_survey")
class Survey(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int? = null,

    @Column(name = "title", length = 500, nullable = false)
    val title: String,

    @OneToMany(mappedBy = "surveyId", cascade = [(CascadeType.ALL)])
    val questions: MutableList<Question> = mutableListOf(),
)
