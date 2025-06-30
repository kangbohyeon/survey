package com.servy.user.domain

import jakarta.persistence.*

@Entity
@Table(name = "tb_item")
class Item(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "option_id", nullable = false)
    var optionId: Option,

    @Column(name = "item", nullable = true, length = 20)
    var item: String,
)