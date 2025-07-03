package com.servy.user.domain

import jakarta.persistence.*


@Entity
@Table(name = "tb_question")
class Question(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_id", nullable = false)
    var surveyId: Survey,

    @Column(name = "title", nullable = false, length = 500)
    var title: String,

    @Column(name = "desc", nullable = true, length = 5000)
    var desc: String? = null,

    @Column(name = "type", nullable = false, length = 20)
    var type: String? = null,

    @Column(name = "required", nullable = false)
    var required: Boolean = false,

    @OneToMany(mappedBy = "questionId", cascade = [(CascadeType.ALL)])
    var Options: MutableList<Option> = mutableListOf(),
)