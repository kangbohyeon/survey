package com.survey.user.service

import com.survey.user.DTO.SurveyListResponseVo
import com.survey.user.DTO.SurveyRequestDto
import com.survey.user.DTO.SurveyResponseVo
import org.springframework.data.domain.Pageable

interface SurveyService {
    fun getSurveys(pageable: Pageable): SurveyListResponseVo

    fun getSurvey(id: Int): SurveyResponseVo

    fun save(surveyRequestDto: SurveyRequestDto)
}