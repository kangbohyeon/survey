package com.servy.user.DTO

data class PageVo(
    val pageNumber : Int,
    val pageSize : Int,
    val totalPages : Int,
    val totalElements : Long,
    val first : Boolean,
    val last :Boolean,
)
