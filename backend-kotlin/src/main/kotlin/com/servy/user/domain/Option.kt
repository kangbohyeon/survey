package com.servy.user.domain

import jakarta.persistence.*

@Entity
@Table(name = "tb_option")
class Option(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    var questionId: Question,

    @Column(name = "max", nullable = true)
    var max: Int,

    @Column(name = "placeholder", nullable = true, length = 500)
    var placeholder: String,

    @OneToMany(mappedBy = "optionId", cascade = [(CascadeType.ALL)])
    var items: MutableList<Item> = mutableListOf(),
)