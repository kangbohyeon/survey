package com.servy.user.DTO


data class SurveyListResponseVo(
    val page: PageVo,
    val content: List<SurveyResponseVo>
)

data class SurveyResponseVo(
    val id: Int,
    val title: String,
    val questions: List<Questions>
)

data class Questions(
    val title: String,
    val desc: String?,
    val type: String?,
    val required: Boolean,
    val option: com.servy.user.DTO.Option
)

data class Option(
    val max: Int,
    val placeHolder: String?,
    val items: List<String>?
)



