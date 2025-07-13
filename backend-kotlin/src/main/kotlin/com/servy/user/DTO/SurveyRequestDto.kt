package com.servy.user.DTO

import lombok.ToString

@ToString
data class SurveyRequestDto(
    val title: String,
    val questions: List<QuestionsDto>
)

data class QuestionsDto(
    val title: String,
    val desc: String,
    val type: String,
    val required: Boolean,
    val options: Options
)

data class Options(
    val max: Int?,
    val items: List<String>?,
    val placeholder: String?
)
