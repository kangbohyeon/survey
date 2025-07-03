package com.servy.user.DTO


data class SurveyResponseVo(
    val id: Int,
    val title: String
)

data class SurveyListResponseVo(
    val page : PageVo,
    val content: List<SurveyResponseVo>

)